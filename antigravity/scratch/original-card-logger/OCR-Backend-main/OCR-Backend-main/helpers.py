import json
import os
import re
import cv2
import numpy as np
from helpers import *
from decouple import config
from datetime import datetime
import re

# Load the car cascade
car_cascade = cv2.CascadeClassifier("haarcascade_cars.xml")

# Dictionaries for character conversion
dict_int_to_char = {
    "0": "O",
    "1": "I",
    "3": "J",
    "4": "A",
    "6": "G",
    "5": "S",
    "8": "B",
}
dict_char_to_int = {
    "O": "0",
    "I": "1",
    "J": "3",
    "A": "4",
    "G": "6",
    "S": "5",
    "B": "8",
}

def clean_plate(plate_name):
    """Cleans and formats a plate name."""
    # Remove non-English characters
    english_characters_and_space = r"[^a-zA-Z0-9 -]"
    plate_name = re.sub(english_characters_and_space, "", plate_name)
    # Add hyphen if missing
    if "-" not in plate_name:
        plate_name = re.sub(
            r"([a-zA-Z]+)([0-9]+)",
            lambda match: match.group(1) + "-" + match.group(2),
            plate_name,
            1,
        )
    # Replace characters based on dictionaries
    if "-" in plate_name:
        parts = plate_name.split("-")
        modified_part = "".join(
            [
                dict_int_to_char.get(char, char) if char.isdigit() else char
                for char in parts[0]
            ]
        )
        modified_part += "-" + "".join(
            [
                dict_char_to_int.get(char, char) if char.isalpha() else char
                for char in parts[1]
            ]
        )
        plate_name = modified_part
    # Remove additional hyphens
    plate_name = re.sub(r"-(?=[^-]*-)", "", plate_name)
    return plate_name

def find_best_plate(cache_list):
    """Finds the most valid number plate from a cache list."""
    plate_count = {}
    wrong_count = {}

    for entry in cache_list:

        plate = ""
        confidence = 0.0

        if len(entry) == 0:
            continue

        if len(entry) >= 2:
            if entry[0][0] == "ICT":
                plate = clean_plate(entry[1][0][0:3] + entry[1][0])
                confidence = (entry[0][1] + entry[1][1]) / 2
            else:
                plate = clean_plate(entry[0][0][0:3] + entry[1][0])
                confidence = (entry[0][1] + entry[1][1]) / 2
        else:
            plate = clean_plate(entry[0][0])
            confidence = entry[0][1]

        if not plate:
            continue

        # Classify plate as valid or invalid
        if plate[0].isalpha() and plate[0].isascii() and plate[-1].isdigit():
            if plate in plate_count:
                plate_count[plate].append(confidence)
            else:
                plate_count[plate] = [confidence]
        else:
            if plate in wrong_count:
                wrong_count[plate].append(confidence)
            else:
                wrong_count[plate] = [confidence]

    if not plate_count:
        return None, 0.0

    max_count_plates = []
    max_confidence = -1
    max_alphabets = -1

    # Determine the best plate based on confidence and alphabetic characters
    for plate, confidences in plate_count.items():
        confidence_sum = sum(confidences)
        if confidence_sum > max_confidence or (
            confidence_sum == max_confidence
            and sum(c.isalpha() for c in plate) > max_alphabets
        ):
            max_count_plates = [plate]
            max_confidence = confidence_sum
            max_alphabets = sum(c.isalpha() for c in plate)
        elif (
            confidence_sum == max_confidence
            and sum(c.isalpha() for c in plate) == max_alphabets
        ):
            max_count_plates.append(plate)

    # Sort plates by number of alphabetic characters, count of plates, and confidence
    sorted_plates = sorted(
        max_count_plates,
        key=lambda x: (
            -sum(c.isalpha() for c in x),
            -len(plate_count[x]),
            -sum(plate_count[x]),
        ),
    )
    best_plate = sorted_plates[0]
    best_confidence = max(plate_count[best_plate])

    return best_plate, best_confidence

def average_timestamp(timestamps):
    """Averages a list of timestamps."""
    if not timestamps:
        return None

    total = sum([timestamp.timestamp() for timestamp in timestamps])
    average = total / len(timestamps)
    return datetime.fromtimestamp(average)

def crop_frame(frame, start_x, start_y, width, height):
    """
    Crop the given frame using the specified dimensions.
    
    Args:
    - frame: The input frame.
    - start_x: The starting x-coordinate of the crop.
    - start_y: The starting y-coordinate of the crop.
    - width: The width of the crop.
    - height: The height of the crop.
    
    Returns:
    - The cropped frame.
    """
    return frame[start_y:start_y + height, start_x:start_x + width]

def get_cropped_frame(image):

    """
    Get the cropped frame of the input image by using the contours of the image.
    Blanks out the rest of the image except the card by ignoring the black background.
    """

    ROI = image

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # cv2.imshow('gray', gray)
    blur = cv2.GaussianBlur(gray, (3, 3), 0)
    # cv2.imshow('blur', blur)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
    # cv2.imshow('thresh', thresh)

    # Find contours and filter for cards using contour area
    cnts = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    threshold_min_area = 10000

    for c in cnts:
        area = cv2.contourArea(c)
        if area > threshold_min_area:
            x,y,w,h = cv2.boundingRect(c)

            # Crop ROI
            ROI = image[y:y+h, x:x+w]

    return ROI

def extract_name_and_cnic(data):

    """
    Extracts the name and CNIC from the OCR data.
    """

    print(data)
    
    name = None
    n_confidence = 0
    cnic = None
    c_confidence = 0
    
    # name_identifiers = ['name']
    # cnic_pattern = re.compile(r'\b\w{5}-\w{7}-\w{1}\b') # This pattern detects alphanumerics
    cnic_pattern = re.compile(r'\b\d{5}-\d{7}-\d{1}\b')
    
    for i, entry in enumerate(data):
        # print(entry)
        text, confidence = entry
        # Check for name
        if text.lower() == 'name' or text.lower() == 'name:' or text.lower() == 'name;' or text.lower() == 'name,':
            # Assuming the actual name follows the identifier
            if i + 1 < len(data):
                if data[i + 1] == ':':
                    name, n_confidence = data[i + 2]
                if data[i + 1] == ';':
                    name, n_confidence = data[i + 2]
                if data[i + 1] == ',':
                    name, n_confidence = data[i + 2]
                else:
                    name, n_confidence = data[i + 1]
        
        # Check for CNIC using the pattern
        if cnic_pattern.match(text):
            cnic = text
            c_confidence = confidence
            if len(cnic) > 15:
                cnic = cnic[:15]
                c_confidence = confidence
    
    return name, n_confidence, cnic, c_confidence

def create_data_json(filename='data.json'):
    """Creates a data.json file with an empty list if it doesn't already exist."""
    if not os.path.exists(filename):
        with open(filename, 'w') as f:
            json.dump([], f)
        print(f"{filename} created.")
    else:
        print(f"{filename} already exists.")

def append_to_data_json(info, filename='data.json'):
    """Appends a stringified JSON object to the data.json file."""
    if not os.path.exists(filename):
        create_data_json(filename)

    with open(filename, 'r') as f:
        data = json.load(f)

    data.append(info)

    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

    print(f"\n{info} Appended info to {filename}.\n")

def save_cnic_image(image, filename='image.jpg'):
    """
    Save the CNIC image to the specified path.
    """
    if not os.path.exists(config('CNIC_SAVE_PATH')):
        os.makedirs(config('CNIC_SAVE_PATH'))

    if image is None:
        print("Image is None")

    cv2.imwrite(f"{config('CNIC_SAVE_PATH')}/{filename}", image)
    print(f"Image saved as {filename}.")

def save_plate_image(image, filename='image.jpg'):
    """
    Save the number plate image to the specified path.
    """
    if not os.path.exists(config('NUM_PLATE_SAVE_PATH')):
        os.makedirs(config('NUM_PLATE_SAVE_PATH'))

    if image is None:
        print("Image is None")
    
    cv2.imwrite(f"{config('NUM_PLATE_SAVE_PATH')}/{filename}", image)
    print(f"Image saved as {filename}.")

def extract_card_details(data):
    # convert all text part into a string
    card_details_str = ""
    for text, _ in data:
        card_details_str += text + ","

    return card_details_str

def get_center_frame(frame):
    # get 50x50 pixel from the center of the frame
    # using current dimensions
    height, width = frame.shape[:2]
    x1 = width // 2 - 25
    x2 = width // 2 + 25
    y1 = height // 2 - 25
    y2 = height // 2 + 25
    return frame[y1:y2, x1:x2]

def get_lower_right_frame(frame):
    # get 50x50 pixel from the lower right corner of the frame
    # using current dimensions
    height, width = frame.shape[:2]
    x1 = width - 120
    x2 = width - 70
    y1 = height - 120
    y2 = height - 70
    return frame[y1:y2, x1:x2]

def get_right_frame(frame):
    # get 50x50 pixel from the right corner of the frame
    # using current dimensions
    height, width = frame.shape[:2]
    x1 = width - 120
    x2 = width - 70
    y1 = height // 2 - 25
    y2 = height // 2 + 25
    return frame[y1:y2, x1:x2]

def check_if_card_in_frame(frame, threshold):
    """
    Check if a card is present in the frame.
    """

    frame = get_right_frame(frame)
    # print("mean: ", np.mean(frame))
    
    # if np.mean(frame) > 150:
    #     return False
    
    # return True
    return np.mean(frame) + 10 < threshold

def process_batch_ocr_results(ocr_results):

    """
    Process the batch OCR results to extract the boxes, texts, and giberish.
    """

    boxes = ocr_results[0]
    texts = ocr_results[1]
    giberish = ocr_results[2]

    return boxes, texts, giberish

def get_mp_list_object_from_cam_id(cam_id, mp_list):

    """
    Get the object from the mp_list based on the cam_id.
    """

    for item in mp_list:
        if item["cam_id"] == cam_id:
            return item
    return None


def update_mp_list_object_from_cam_id(cam_id, mp_list, key, new_data):

    """
    Update the object from the mp_list based on the cam_id.
    """

    for idx, item in enumerate(mp_list):
        if item["cam_id"] == cam_id:
            updated_item = item.copy()
            updated_item[key] = new_data
            mp_list[idx] = updated_item
            return
    return None


def resize_to_largest(images):

    """
    Resize all images to the largest dimensions.
    """

    # Determine the largest dimensions
    max_height = max(image.shape[0] for image in images)
    max_width = max(image.shape[1] for image in images)
    
    # Resize all images to the largest dimensions
    resized_images = [cv2.resize(image, (max_width, max_height)) for image in images]
    return resized_images

def check_if_car_in_frame(frame):
    """
    Check if a car is present in the frame.
    """
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    cars = car_cascade.detectMultiScale(gray, 1.1, 1)
    return len(cars) > 0
