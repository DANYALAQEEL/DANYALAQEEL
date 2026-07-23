import imagehash
from PIL import Image

class ChangeDetector:
    def __init__(self, diff_threshold: int = 5):
        self.last_hash = None
        self.diff_threshold = diff_threshold

    def has_changed_significantly(self, current_image: Image.Image) -> bool:
        """
        Computes the perceptual hash of the image and compares it to the last hash.
        Returns True if the hamming distance exceeds the threshold.
        """
        current_hash = imagehash.phash(current_image)
        
        if self.last_hash is None:
            self.last_hash = current_hash
            return True # Always process the first frame
            
        distance = current_hash - self.last_hash
        
        if distance >= self.diff_threshold:
            self.last_hash = current_hash
            return True
            
        return False
