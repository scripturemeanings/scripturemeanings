#!/usr/bin/env python3
"""
Remove white background from logo.webp and make it transparent
"""

from PIL import Image
import sys
import os

def remove_white_background(input_path, output_path=None, threshold=240):
    """
    Remove white/light background from an image and make it transparent.
    
    Args:
        input_path: Path to input image
        output_path: Path to save output (defaults to overwriting input)
        threshold: RGB threshold (0-255) - pixels lighter than this become transparent
    """
    if output_path is None:
        output_path = input_path
    
    # Open the image
    img = Image.open(input_path)
    
    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Get image data
    data = img.getdata()
    
    # Create new image data with transparency
    new_data = []
    for item in data:
        # If pixel is white/light (all RGB values above threshold), make it transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # Make transparent
            new_data.append((255, 255, 255, 0))
        else:
            # Keep original pixel
            new_data.append(item)
    
    # Update image with new data
    img.putdata(new_data)
    
    # Save as WebP with transparency
    img.save(output_path, 'WEBP', lossless=True)
    print(f"✓ Background removed! Saved to: {output_path}")

if __name__ == "__main__":
    logo_path = "public/logo.webp"
    
    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} not found!")
        sys.exit(1)
    
    print(f"Processing {logo_path}...")
    print("Removing white background...")
    
    # Try different thresholds if needed
    try:
        remove_white_background(logo_path, threshold=240)
    except Exception as e:
        print(f"Error: {e}")
        print("\nTrying with a lower threshold (200)...")
        try:
            remove_white_background(logo_path, threshold=200)
        except Exception as e2:
            print(f"Error: {e2}")
            sys.exit(1)

