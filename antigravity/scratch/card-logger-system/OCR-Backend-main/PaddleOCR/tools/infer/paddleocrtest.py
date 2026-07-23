from typing import Counter
from paddleocr import PaddleOCR, draw_ocr
import cv2
import numpy as np
from helpers import *
from motion_detector import MotionDetection

cap = cv2.VideoCapture("rtsp://admin:admin123@10.1.15.240")

while True:
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    ret, frame = cap.read()

    if frame is None:
        print("Frame is None")
        break

    cv2.imshow('frame_orig', frame)

cap.release()
cv2.destroyAllWindows()