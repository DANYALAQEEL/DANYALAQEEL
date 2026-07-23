import pytesseract
import cv2
import numpy as np
from PIL import Image

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

def analyze():
    img_path = "debug_screen.png"
    image = Image.open(img_path)
    cv_img = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    
    print("--- FULL TEXT ---")
    print(pytesseract.image_to_string(cv_img))
    
    print("\n--- WORD DATA ---")
    data = pytesseract.image_to_data(cv_img, output_type=pytesseract.Output.DICT)
    n_boxes = len(data['text'])
    for i in range(n_boxes):
        text = data['text'][i].strip()
        if text:
            x, y, w, h = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
            # Color check
            crop = image.crop((x-5, y-5, x+w+5, y+h+5))
            avg_color = np.mean(np.array(crop), axis=(0, 1))
            print(f"Word: '{text}' at ({x}, {y}) | Avg Color: {avg_color}")

if __name__ == "__main__":
    analyze()
