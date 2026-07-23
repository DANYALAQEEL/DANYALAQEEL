import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import os

def create_parchment_texture(width=1920, height=1080, output_path="parchment_bg.png"):
    # Create base noise
    noise = np.random.normal(245, 10, (height, width, 3)).astype(np.uint8)
    img = Image.fromarray(noise, 'RGB')
    
    # Apply blur to smooth out noise
    img = img.filter(ImageFilter.GaussianBlur(radius=5))
    
    # Overlay a sepia color
    sepia = Image.new('RGB', (width, height), (245, 235, 210))
    img = Image.blend(img, sepia, 0.7)
    
    # Add some "stains" or unevenness
    draw = ImageDraw.Draw(img, 'RGBA')
    for _ in range(5):
        x = np.random.randint(0, width)
        y = np.random.randint(0, height)
        r = np.random.randint(100, 500)
        draw.ellipse((x-r, y-r, x+r, y+r), fill=(210, 180, 140, 20), outline=None)
    
    # Final blur to blend stains
    img = img.filter(ImageFilter.GaussianBlur(radius=50))
    
    img.save(output_path)
    print(f"Generated {output_path}")

def create_gold_border(width=1920, height=1080, output_path="gold_frame.png"):
    # Create a transparent image
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Gold Gradient colors
    gold_dark = (184, 134, 11)
    gold_light = (255, 215, 0)
    
    border_width = 40
    margin = 50
    
    # Draw simple double border
    # Outer
    draw.rectangle(
        [margin, margin, width-margin, height-margin],
        outline=gold_dark, width=5
    )
    
    # Inner thick
    draw.rectangle(
        [margin+15, margin+15, width-margin-15, height-margin-15],
        outline=gold_light, width=3
    )
    
    # Corners
    corner_size = 60
    # Top-Left
    draw.line([(margin, margin+corner_size), (margin, margin)], fill=gold_dark, width=10)
    draw.line([(margin, margin), (margin+corner_size, margin)], fill=gold_dark, width=10)
    
    # Top-Right
    draw.line([(width-margin, margin+corner_size), (width-margin, margin)], fill=gold_dark, width=10)
    draw.line([(width-margin, margin), (width-margin-corner_size, margin)], fill=gold_dark, width=10)
    
    # Bottom-Left
    draw.line([(margin, height-margin-corner_size), (margin, height-margin)], fill=gold_dark, width=10)
    draw.line([(margin, height-margin), (margin+corner_size, height-margin)], fill=gold_dark, width=10)
    
    # Bottom-Right
    draw.line([(width-margin, height-margin-corner_size), (width-margin, height-margin)], fill=gold_dark, width=10)
    draw.line([(width-margin, height-margin), (width-margin-corner_size, height-margin)], fill=gold_dark, width=10)

    img.save(output_path)
    print(f"Generated {output_path}")

def create_islamic_pattern_placeholder(output_path="pattern.png"):
    # Simple geometric pattern
    size = 200
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw an 8-pointed star
    center = size // 2
    r_outer = 80
    r_inner = 40
    
    points = []
    import math
    for i in range(16):
        angle = i * (360 / 16) * (math.pi / 180)
        r = r_outer if i % 2 == 0 else r_inner
        x = center + r * math.cos(angle)
        y = center + r * math.sin(angle)
        points.append((x, y))
        
    draw.polygon(points, fill=(0, 66, 37, 128), outline=(212, 175, 55), width=2)
    img.save(output_path)
    print(f"Generated {output_path}")

if __name__ == "__main__":
    os.makedirs(r"C:\Users\Administrator\.gemini\antigravity\scratch\assets", exist_ok=True)
    os.chdir(r"C:\Users\Administrator\.gemini\antigravity\scratch\assets")
    
    create_parchment_texture()
    create_gold_border()
    create_islamic_pattern_placeholder()
