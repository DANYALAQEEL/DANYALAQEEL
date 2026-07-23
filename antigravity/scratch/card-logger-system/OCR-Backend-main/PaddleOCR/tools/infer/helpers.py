import re
from typing import Counter
# from paddleocr import PaddleOCR, draw_ocr
import cv2
import numpy as np
# from helpers import *

def do_OCR_on_cropped_frame(ocr, frame):
    result = ocr.ocr(frame, cls=True)

    if len(result) == 0:
        return None

    for idx in range(len(result)):
        res = result[idx]
    return res

def get_cropped_frame(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # cv2.imshow('gray', gray)
    blur = cv2.GaussianBlur(gray, (3, 3), 0)
    # cv2.imshow('blur', blur)
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
    # cv2.imshow('thresh', thresh)

    # Find contours and filter for cards using contour area
    cnts = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = cnts[0] if len(cnts) == 2 else cnts[1]
    threshold_min_area = 1000

    for c in cnts:
        area = cv2.contourArea(c)
        if area > threshold_min_area:
            cv2.drawContours(image, [c], 0, (36,255,12), 3)
            x,y,w,h = cv2.boundingRect(c)

            # Crop ROI
            ROI = image[y:y+h, x:x+w]

    return ROI

def most_common_name_and_cnic(data):
    # Separate names and CNICs into their own lists
    names = [name for name, cnic in data]
    cnics = [cnic for name, cnic in data]
    
    # Use Counter to count occurrences
    name_counter = Counter(names)
    cnic_counter = Counter(cnics)
    
    # Find the most common name and CNIC
    most_common_name = name_counter.most_common(1)
    most_common_cnic = cnic_counter.most_common(1)
    
    # Return the most common name and CNIC
    return most_common_name[0] if most_common_name else (None, 0), most_common_cnic[0] if most_common_cnic else (None, 0)

def get_cropped_frame(image):

    image = image[100:1080, 100:1000]

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
            cv2.drawContours(image, [c], 0, (36,255,12), 3)
            x,y,w,h = cv2.boundingRect(c)

            # Crop ROI
            ROI = image[y:y+h, x:x+w]

    return ROI

def check_if_majority_of_frame_is_white(image):
    # check if majority of frame is white
    if np.mean(image) > 100:
        return True
    else:
        return False
    
def parse_data(data):
    # Extract the text from the data
    text = [entry[1][0] for entry in data]

    return text

def extract_name_and_cnic(data):
    
    name = None
    cnic = None
    
    # name_identifiers = ['name']
    cnic_pattern = re.compile(r'\b\d{5}-\d{7}-\d{1}\b')
    
    for i, text in enumerate(data):
        # Check for name
        if text.lower() == 'name' or text.lower() == 'name:' or text.lower() == 'name;' or text.lower() == 'name,':
            # Assuming the actual name follows the identifier
            if i + 1 < len(data):
                name = data[i + 1]
        
        # Check for CNIC using the pattern
        if cnic_pattern.match(text):
            cnic = text
    
    return name, cnic

def is_majority_whitish(image, threshold=0.7):
    
    # Convert the image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Define a threshold to consider a pixel as white
    white_threshold = 170  # This can be adjusted based on your needs
    
    # Threshold the grayscale image to create a binary image
    _, binary_image = cv2.threshold(gray_image, white_threshold, 255, cv2.THRESH_BINARY)
    
    # Count the number of white pixels
    white_pixel_count = np.sum(binary_image == 255)
    
    # Calculate the total number of pixels
    total_pixels = binary_image.size
    
    # Calculate the proportion of white pixels
    white_pixel_ratio = white_pixel_count / total_pixels

    # print(white_pixel_ratio)
    
    # Check if the majority of the image is whitish
    is_whitish = white_pixel_ratio >= threshold
    
    return is_whitish

import json
import os

def create_data_json(filename='data.json'):
    """Creates a data.json file with an empty list if it doesn't already exist."""
    if not os.path.exists(filename):
        with open(filename, 'w') as f:
            json.dump([], f)
        print(f"{filename} created.")
    else:
        print(f"{filename} already exists.")