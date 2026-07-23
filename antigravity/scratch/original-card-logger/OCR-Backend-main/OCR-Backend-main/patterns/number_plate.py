import datetime
import json
import os
import time
import cv2
import multiprocessing as mp
import asyncio

from helpers import (
    get_mp_list_object_from_cam_id,
    update_mp_list_object_from_cam_id,
    find_best_plate,
    average_timestamp,
    check_if_car_in_frame
)

from database_operations import add_number_plate_to_database


"""
Pattern for number plate detection
"""

def pre_detection_pattern_for_num_plate_rfid(
    camera_id: int,
    cam_url: str,
    crop: str,
    cam_type: str,
    frame_queue: mp.Queue,
    number_plate_detect_cache,
):
    number_plate_detect_cache.append(
        {
            "cam_id": camera_id,
            "number_plates": [],
        }
    )

    startX, startY, width, height = [int(i) for i in crop.split(",")]
    cap = cv2.VideoCapture(cam_url)

    print(
        f"Video source of {camera_id} set"
        if cap.isOpened()
        else f"Video source of {camera_id} not set"
    )

    while True:
            
            ret, frame = cap.read()
    
            if frame is None:
                print("Frame is None")
                cap = cv2.VideoCapture(cam_url)
                continue
    
            frame = frame[startY : startY + height, startX : startX + width]
    
            if not check_if_car_in_frame(frame):
                continue

            frame_queue.put(
                {
                    "camera_id": camera_id,
                    "cam_type": cam_type,
                    "timestamp": datetime.datetime.now(),
                    "frame": frame,
                }
            )

def post_detection_pattern_for_num_plate_rfid(
    result: dict,
    number_plate_detect_cache,
):
    cam_id = result["camera_id"]
    timestamp = result["timestamp"]
    number_plates = result["texts"]
    frame = result["frame"]

    current_cache_number_plates = get_mp_list_object_from_cam_id(
        cam_id=cam_id, mp_list=number_plate_detect_cache
    )["number_plates"]

    if len(number_plates) > 0:
        new_entry = (number_plates, timestamp, frame)
        # new_entry = (number_plates, timestamp)
        current_cache_number_plates.append(
            new_entry
        )
        update_mp_list_object_from_cam_id(
            cam_id=cam_id,
            mp_list=number_plate_detect_cache,
            key="number_plates",
            new_data=current_cache_number_plates,
        )
        return

    if len(number_plates) == 0:
        current_cache_number_plates = get_mp_list_object_from_cam_id(
            cam_id=cam_id, mp_list=number_plate_detect_cache
        )["number_plates"]

        print(current_cache_number_plates)

        timestamps = []
        plates = []
        frames = []

        for plate, _timestamp, frame in current_cache_number_plates:
            timestamps.append(_timestamp)
            plates.append(plate)
            frames.append(frame)

        best_plate, plate_confidence = find_best_plate(plates)

        avg_timestamp = average_timestamp(timestamps)

        if len(frames) > 1:
            best_frame = frames[len(frames) // 2]
        elif len(frames) == 1:
            best_frame = frames[0]
        else:
            best_frame = None

        if best_plate:
            
            asyncio.run(
                add_number_plate_to_database(
                    number_plate=best_plate,
                    number_plate_confidence=plate_confidence,
                    timestamp=avg_timestamp,
                    camera_id=cam_id,
                    save_image=best_frame,
                )
            )

            print(
                    f"Best plate: {best_plate} with confidence: {plate_confidence}"
                )
        
        update_mp_list_object_from_cam_id(
            cam_id=cam_id,
            mp_list=number_plate_detect_cache,
            key="number_plates",
            new_data=[],
        )

        return
