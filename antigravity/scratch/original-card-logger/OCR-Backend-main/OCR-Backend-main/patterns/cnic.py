import asyncio
import datetime
import time
import cv2
import multiprocessing as mp
import numpy as np

from helpers import (
    check_if_card_in_frame,
    crop_frame,
    extract_name_and_cnic,
    get_mp_list_object_from_cam_id,
    update_mp_list_object_from_cam_id,
    extract_card_details,
    get_right_frame,
)

from database_operations import add_cnic_to_database

"""
Pattern for CNIC detection
"""

def pre_detection_pattern_for_cnic(
    camera_id: int,
    cam_url: str,
    crop: str,
    cam_type: str,
    frame_queue: mp.Queue,
    previously_saved_cnic,
    card_already_in_holder,
):

    previously_saved_cnic.append(
        {
            "cam_id": camera_id,
            "cnic": None,
        }
    )

    card_already_in_holder.append({"cam_id": camera_id, "status": False})

    startX, startY, width, height = [int(i) for i in crop.split(",")]

    cap = cv2.VideoCapture(cam_url)

    print(
        f"Video source of {camera_id} set"
        if cap.isOpened()
        else f"Video source of {camera_id} not set"
    )

    _, frame = cap.read()
    threshold = np.mean(get_right_frame(frame))
    
    is_card_in_frame = False

    count = 0
    frame = None

    while True:

        ret, frame = cap.read()
        count += 1

        if count % 4 != 0:
            continue

        # print(count, "at: ", datetime.datetime.now())

        if frame is None:
            print("Frame is None")
            print("Reconnecting to camera")
            cap = cv2.VideoCapture(cam_url)
            print("Connected", "system started at: ", count)
            continue

        # db crop
        cropped_frame = crop_frame(frame, startX, startY, width, height)
        # auto crop
        # cropped_frame = get_cropped_frame(cropped_frame)

        # if cropped_frame is None:
        #     continue
        # cv2.imshow(str(camera_id), cropped_frame)

        # # wait
        # if cv2.waitKey(1) & 0xFF == ord('q'):
        #     break

        # Update threshold every six seconds
        if count%200 == 0:
            threshold = np.mean(get_right_frame(cropped_frame))
            # print(f"Updated Threshold to {threshold}")

        is_card_in_frame = check_if_card_in_frame(cropped_frame, threshold)

        if not is_card_in_frame:
            threshold = np.mean(get_right_frame(cropped_frame))
        
        if not get_mp_list_object_from_cam_id(camera_id, card_already_in_holder)[
            "status"
        ]:
            if not is_card_in_frame:
                # print("Card not in holder")
                continue
        elif is_card_in_frame:
            # print("Card already in holder")
            continue

        for _ in range(3):
            ret, frame = cap.read()
            if frame is None:
                print("Frame is None")
                print("Reconnecting to camera")
                cap = cv2.VideoCapture(cam_url)
                print("Connected")
                continue

        if frame is None:
            print("Frame is None")
            print("Reconnecting to camera")
            cap = cv2.VideoCapture(cam_url)
            print("Connected")
            continue

        cropped_frame = crop_frame(frame, startX, startY, width, height)
        # cropped_frame = get_cropped_frame(cropped_frame)

        queue_obj = {
            "camera_id": camera_id,
            "cam_type": cam_type,
            "timestamp": datetime.datetime.now(),
            "frame": cropped_frame,
        }

        frame_queue.put(queue_obj)


def post_detection_pattern_for_cnic(
    result: dict, previously_saved_cnic, card_already_in_holder
):

    cam_id = result["camera_id"]
    timestamp = result["timestamp"]
    save_image = result["frame"]
    texts = result["texts"]

    if len(texts) == 0:
        update_mp_list_object_from_cam_id(
            cam_id, card_already_in_holder, "status", None
        )
        # print("No text detected")
        return

    if get_mp_list_object_from_cam_id(cam_id, card_already_in_holder)["status"]:
        # print("Card already in holder")
        return

    print("Card not in holder")
    name, n_confidence, cnic, c_confidence = extract_name_and_cnic(texts)

    print(f"Name: {name} with confidence: {n_confidence}")
    print(f"CNIC: {cnic} with confidence: {c_confidence}")

    if cnic is None:
        print("CNIC not detected")
        return

    start_time = time.time()
    print("card entered", cnic, "at: ", start_time)

    all_info = extract_card_details(texts)
    print("All info: ", all_info)

    previously_saved_cnic_current_camera = get_mp_list_object_from_cam_id(
        cam_id, previously_saved_cnic
    )["cnic"]

    if previously_saved_cnic_current_camera is None and cnic is not None:
        print(
            "New card detected, previoiusly saved cnic is None and now setting it to: ",
            cnic,
        )
        asyncio.run(
            add_cnic_to_database(
                name,
                n_confidence,
                cnic,
                c_confidence,
                all_info,
                timestamp,
                cam_id,
                save_image,
            )
        )
        update_mp_list_object_from_cam_id(cam_id, previously_saved_cnic, "cnic", cnic)
        update_mp_list_object_from_cam_id(
            cam_id, card_already_in_holder, "status", True
        )
    elif (
        previously_saved_cnic_current_camera is not None
        and cnic is not None
        and cnic != previously_saved_cnic_current_camera
    ):
        print(
            "New card detected, previoiusly saved cnic is not None and now setting it to: ",
            cnic,
        )
        asyncio.run(
            add_cnic_to_database(
                name,
                n_confidence,
                cnic,
                c_confidence,
                all_info,
                timestamp,
                cam_id,
                save_image,
            )
        )
        update_mp_list_object_from_cam_id(cam_id, previously_saved_cnic, "cnic", cnic)
        update_mp_list_object_from_cam_id(
            cam_id, card_already_in_holder, "status", True
        )
    else:
        print("Card was already in holder", cnic, "did not save it again")
        update_mp_list_object_from_cam_id(
            cam_id, card_already_in_holder, "status", True
        )

    end_time = time.time()
    print("card exited", cnic, "at: ", end_time)
    print("Time taken: ", end_time - start_time)
