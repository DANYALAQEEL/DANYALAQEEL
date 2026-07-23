"""
main_singlethread.py
--------------------
Single-process, single-threaded OCR pipeline.

Replaces the multiprocessing main.py which was spawning 3+ subprocesses,
each loading the full PaddlePaddle DLL (~500 MB), exhausting the system
paging file.  This version loads PaddlePaddle exactly ONCE and runs the
entire pipeline (camera read → OCR → DB save) in a single loop.
"""

import asyncio
import datetime
import time
import sys

import cv2
import numpy as np

from PaddleOCR.tools.infer.predict_system import TextSystem
from PaddleOCR.tools.infer import utility

from database_operations import get_db_config, add_cnic_to_database

from helpers import (
    check_if_card_in_frame,
    crop_frame,
    extract_name_and_cnic,
    extract_card_details,
    get_right_frame,
    resize_to_largest,
    process_batch_ocr_results,
)


def init_ocr():
    """Initialise PaddleOCR TextSystem (called once in the main process)."""
    args = utility.parse_args()
    args.det_model_dir      = "./det_model"
    args.rec_model_dir      = "./rec_model"
    args.rec_char_dict_path = "./PaddleOCR/ppocr/utils/en_dict.txt"
    args.use_space_char     = True
    args.use_gpu            = False
    print("Initialising OCR model...")
    ts = TextSystem(args)
    print("OCR model ready.")
    return ts


def open_cap(cam_url):
    """Open a VideoCapture, casting digit strings to int for webcam devices."""
    source = int(cam_url) if str(cam_url).isdigit() else cam_url
    cap = cv2.VideoCapture(source)
    return cap, source


def run_pipeline(cam, ts):
    """
    Run the full OCR pipeline for a single CNIC camera in a blocking loop.
    Reads frames from the camera/video, detects card presence, runs OCR,
    and saves results to the database.
    """
    cam_id   = cam["id"]
    cam_url  = cam["cam_url"]
    cam_type = cam["type"]
    crop     = cam["crop"]

    startX, startY, width, height = [int(i) for i in crop.split(",")]

    cap, source = open_cap(cam_url)

    if cap.isOpened():
        print(f"Video source for camera {cam_id} opened successfully.")
    else:
        print(f"Could not open video source for camera {cam_id}: {cam_url}")
        return

    # Read initial frame for threshold baseline
    _, frame = cap.read()
    while frame is None:
        print(f"Camera {cam_id}: waiting for first frame...")
        time.sleep(2)
        cap.release()
        cap, _ = open_cap(cam_url)
        _, frame = cap.read()

    cropped_init = crop_frame(frame, startX, startY, width, height)
    threshold    = np.mean(get_right_frame(cropped_init))

    previously_saved_cnic = None
    card_in_holder        = False
    count                 = 0

    print(f"Camera {cam_id}: entering main loop...")

    while True:
        ret, frame = cap.read()
        count += 1

        # Process every 4th frame to reduce CPU load
        if count % 4 != 0:
            continue

        if frame is None:
            if str(cam_url).isdigit():
                print(f"Camera {cam_id}: stream lost, reconnecting...")
                time.sleep(2)
                cap.release()
                cap, _ = open_cap(cam_url)
            else:
                # Video file ended — reopen to loop
                cap.release()
                cap, _ = open_cap(cam_url)
            continue

        cropped = crop_frame(frame, startX, startY, width, height)

        # Refresh threshold periodically
        if count % 200 == 0:
            threshold = np.mean(get_right_frame(cropped))

        is_card = check_if_card_in_frame(cropped, threshold)

        if not is_card:
            threshold  = np.mean(get_right_frame(cropped))
            card_in_holder = False
            continue

        if card_in_holder:
            # Same card still present — skip
            continue

        # Card just appeared — grab a few frames for best quality
        for _ in range(3):
            ret, frame = cap.read()
            if frame is None:
                break

        if frame is None:
            continue

        cropped = crop_frame(frame, startX, startY, width, height)

        # ---- Run OCR ----
        resized = resize_to_largest([cropped])
        detections = ts(resized)
        _, texts, _ = process_batch_ocr_results(detections)

        if not texts or len(texts[0]) == 0:
            card_in_holder = False
            continue

        text_list = texts[0]
        name, n_conf, cnic, c_conf = extract_name_and_cnic(text_list)
        all_info = extract_card_details(text_list)

        print(f"Camera {cam_id} — Name: {name} ({n_conf:.2f})  CNIC: {cnic} ({c_conf:.2f})")

        if cnic is None:
            card_in_holder = False
            continue

        if previously_saved_cnic == cnic:
            print(f"Camera {cam_id}: CNIC {cnic} already saved this session, skipping.")
            card_in_holder = True
            continue

        # ---- Save to database ----
        saved = asyncio.run(add_cnic_to_database(
            name, n_conf, cnic, c_conf, all_info,
            datetime.datetime.now(), cam_id, cropped
        ))

        if saved:
            previously_saved_cnic = cnic
            card_in_holder        = True
            print(f"Camera {cam_id}: saved CNIC {cnic} to database.")
        else:
            card_in_holder = True


async def load_cameras():
    db_config = await get_db_config()
    return db_config["cameras"]


def main():
    cameras = asyncio.run(load_cameras())

    # Filter to only active CNIC cameras (skip disabled ones)
    active = [
        c for c in cameras
        if c["type"] == "cnic" and str(c.get("cam_url", "")).strip() != "99"
    ]

    if not active:
        print("No active CNIC cameras found in database. Exiting.")
        sys.exit(0)

    print(f"Found {len(active)} active CNIC camera(s).")

    # Initialise OCR once (loaded into the MAIN process only — no subprocesses)
    ts = init_ocr()

    if len(active) == 1:
        # Single camera — run directly in the main process
        run_pipeline(active[0], ts)
    else:
        # Multiple cameras — use threads (not multiprocessing) to avoid
        # re-loading PaddlePaddle in each worker
        import threading
        threads = [
            threading.Thread(target=run_pipeline, args=(cam, ts), daemon=True)
            for cam in active
        ]
        for t in threads:
            t.start()
        for t in threads:
            t.join()


if __name__ == "__main__":
    main()
