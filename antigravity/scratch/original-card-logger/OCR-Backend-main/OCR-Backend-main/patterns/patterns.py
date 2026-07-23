import multiprocessing as mp

import sys
import signal

from PaddleOCR.tools.infer.predict_system import TextSystem
from PaddleOCR.tools.infer import utility

from patterns.cnic import (
    pre_detection_pattern_for_cnic,
    post_detection_pattern_for_cnic,
)
from patterns.number_plate import (
    pre_detection_pattern_for_num_plate_rfid,
    post_detection_pattern_for_num_plate_rfid,
)

from helpers import (
    process_batch_ocr_results,
    resize_to_largest,
)

def post_detection_loop(
    ocr_results_queue: mp.Queue,
    previously_saved_cnic,
    card_already_in_holder,
    number_plate_detect_cache,
):

    """
    Post detection loop to process OCR results
    based on the type of camera
    """

    while True:

        if ocr_results_queue.empty():
            continue

        result = ocr_results_queue.get()

        type = result["cam_type"]
        # print(type)

        if type == "cnic":
            print("Post detection pattern for CNIC", result["camera_id"])
            post_detection_pattern_for_cnic(
                result, previously_saved_cnic, card_already_in_holder
            )
        elif type == "num_plate_rfid":
            # print("Post detection pattern for Number Plate", result["camera_id"])
            post_detection_pattern_for_num_plate_rfid(result, number_plate_detect_cache)
        else:
            continue

def run_ocr(frame_queue: mp.Queue, ocr_results_queue: mp.Queue):

    """
    Run OCR on frames in the frame queue
    and put the results in the OCR results queue
    """

    args = utility.parse_args()

    # args.use_angle_cls = True
    args.det_model_dir = "./det_model"
    args.rec_model_dir = "./rec_model"
    # args.cls_model_dir = './cls_model'
    args.rec_char_dict_path = "./PaddleOCR/ppocr/utils/en_dict.txt"
    args.use_space_char = True
    args.use_gpu = True

    frames = []
    timestamps = []
    cam_ids = []
    cam_types = []

    detections = []

    try:
        ts = TextSystem(args)
    except Exception as e:
        print("Error initializing OCR model: ", e)
        sys.exit(1)

    while True:

        if len(frames) > 0:
            # print("Running OCR on frames")

            resized_frames = resize_to_largest(frames)

            detections = ts(resized_frames)

            boxes, texts, _ = process_batch_ocr_results(detections)

            result_entry = {}

            for id, text in enumerate(texts):
                result_entry = {
                    "camera_id": cam_ids[id],
                    "cam_type": cam_types[id],
                    "frame": frames[id],
                    "timestamp": timestamps[id],
                    "texts": text,
                }

                ocr_results_queue.put(result_entry)
            frames = []
            timestamps = []
            cam_ids = []
            cam_types = []
            detections = []

        while not frame_queue.empty():
            queue_entry = frame_queue.get()

            cam_ids.append(queue_entry["camera_id"])
            cam_types.append(queue_entry["cam_type"])
            timestamps.append(queue_entry["timestamp"])
            frames.append(queue_entry["frame"])
            # print("Frame added to frames list")

def signal_handler(sig, frame, processes):

    """
    Signal handler to terminate processes
    """

    print("Signal received, terminating processes...")
    for process in processes:
        process.terminate()
    for process in processes:
        process.join()
    print("All processes terminated")
    sys.exit(0)

def run_system(
    cams: list,
    frame_queue: mp.Queue,
    ocr_results_queue: mp.Queue,
    previously_saved_cnic,
    card_already_in_holder,
    number_plate_detect_cache,
):

    """
    Run the main OCR system
    """

    processes = []

    for cam in cams:
        if cam["type"] == "cnic":
            p = mp.Process(
                target=pre_detection_pattern_for_cnic,
                args=(
                    cam["id"],
                    cam["cam_url"],
                    cam["crop"],
                    cam["type"],
                    frame_queue,
                    previously_saved_cnic,
                    card_already_in_holder,
                ),
            )
        elif cam["type"] == "num_plate_rfid":
            p = mp.Process(
                target=pre_detection_pattern_for_num_plate_rfid,
                args=(
                    cam["id"],
                    cam["cam_url"],
                    cam["crop"],
                    cam["type"],
                    frame_queue,
                    number_plate_detect_cache,
                ),
            )
        else:
            continue
        p.start()
        processes.append(p)

    pocr = mp.Process(target=run_ocr, args=(frame_queue, ocr_results_queue))
    pocr.start()
    processes.append(pocr)

    pocr_post = mp.Process(
        target=post_detection_loop,
        args=(ocr_results_queue, previously_saved_cnic, card_already_in_holder, number_plate_detect_cache),
    )
    pocr_post.start()
    processes.append(pocr_post)

    signal.signal(
        signal.SIGINT, lambda sig, frame: signal_handler(sig, frame, processes)
    )

    for p in processes:
        p.join()
