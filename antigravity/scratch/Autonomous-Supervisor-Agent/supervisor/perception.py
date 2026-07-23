import json
import pytesseract
from PIL import Image
import google.generativeai as genai
import cv2
import numpy as np

from supervisor.config import config

class PerceptionSystem:
    def __init__(self):
        if config.gemini_api_key:
            genai.configure(api_key=config.gemini_api_key)
            self.model = genai.GenerativeModel('gemini-1.5-pro-latest')
        else:
            self.model = None

        if config.tesseract_cmd_path:
            pytesseract.pytesseract.tesseract_cmd = config.tesseract_cmd_path

    def analyze_with_ai(self, image: Image.Image, target_desc: str = None) -> dict:
        """
        AI Brain: For complex visual decisions when OCR fails.
        """
        if not self.model:
            return None
            
        task_prompt = target_desc if target_desc else "Identify the most likely next button to click to proceed with the user's task."
        
        prompt = f"""
        You are the visual cortex of a desktop automation agent. 
        TASK: {task_prompt}
        
        CRITICAL INSTRUCTION: Distinguish between static text (like in a terminal or document) and actual interactive BUTTONS or INPUT FIELDS.
        - Only click if the element has visual characteristics of a button (borders, background color, shadow, or clear interactive styling).
        - If the text is just plain letters on a plain background (like terminal logs), IGNORE IT and return action_type "wait".
        - Find the EXACT center coordinates (x, y) of the interactive area.

        RETURN JSON ONLY:
        {{
          "thought_process": "Is this a button or just text? Why am I choosing these coordinates?",
          "action_type": "click | wait",
          "target_description": "{task_prompt}",
          "x": int_coordinate_if_button,
          "y": int_coordinate_if_button,
          "confidence": 0.95
        }}
        """
        try:
            import base64
            import io
            buffered = io.BytesIO()
            image.save(buffered, format="PNG")
            # Convert to PIL Image for Gemini if needed, though usually bytes work
            response = self.model.generate_content([prompt, image])
            text = response.text
            if "```json" in text:
                text = text.split("```json")[1].split("```")[0].strip()
            elif "```" in text:
                text = text.split("```")[1].strip()
            return json.loads(text)
        except Exception as e:
            print(f"AI Perception Error: {e}")
            return None

    def _is_blue_button(self, image: Image.Image, x: int, y: int, w: int, h: int) -> bool:
        """Checks if the area around the text is dominantly blue."""
        try:
            padding = 10
            left = max(0, x - padding)
            top = max(0, y - padding)
            right = min(image.width, x + w + padding)
            bottom = min(image.height, y + h + padding)
            
            crop = image.crop((left, top, right, bottom))
            np_crop = np.array(crop)
            avg_color = np.mean(np_crop, axis=(0, 1))
            r, g, b = avg_color[0], avg_color[1], avg_color[2]
            
            # Dominant blue channel
            if b > r and b > g and b > 30:
                return True
            return False
        except Exception:
            return False

    def analyze_with_ocr(self, image: Image.Image, failed_coords: dict = None) -> dict:
        """Fallback OCR-based perception with phrase searching and color filter."""
        try:
            cv_img = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
            full_text = pytesseract.image_to_string(cv_img)
            sorted_keywords = sorted(config.keywords, key=len, reverse=True)
            data = pytesseract.image_to_data(cv_img, output_type=pytesseract.Output.DICT)
            n_boxes = len(data['text'])
            
            for keyword in sorted_keywords:
                if keyword.lower() in full_text.lower():
                    for i in range(n_boxes):
                        text_box = data['text'][i].strip()
                        if text_box.lower() in keyword.lower() and len(text_box) > 2:
                            x, y, w, h = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
                            if y < 100: continue
                            if not self._is_blue_button(image, x, y, w, h): continue

                            center_x = x + w // 2
                            center_y = y + h // 2
                            print(f"[Perception] Found SAFE Phrase Match: '{keyword}' at ({center_x}, {center_y})")
                            return {
                                "action": "click",
                                "target": keyword,
                                "x": center_x,
                                "y": center_y,
                                "confidence": 0.95
                            }
        except Exception as e:
            print(f"OCR Error: {e}")
        return {"action": "none", "confidence": 1.0}
