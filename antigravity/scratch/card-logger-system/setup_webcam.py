"""
setup_webcam.py
---------------
Updates the camera table in the sgicl database so that:
  - All CNIC cameras use the local webcam (OpenCV device index 0)
  - crop is set to cover the full 640x480 frame
  - num_plate cameras are disabled (set to device 1 which won't open)

Run with:
    .\\venv\\Scripts\\python ..\\setup_webcam.py
from inside Card-Logger-Backend-main, or just call it directly with the
system Python if psycopg2 is available.
"""

import psycopg2

DB = dict(
    host="localhost",
    port=5432,
    user="postgres",
    password="postgres",
    dbname="sgicl",
)

# OpenCV reads integer device indexes as integers when passed as strings too,
# but VideoCapture("0") does NOT work — it needs to be the integer 0.
# The backend code does:  cv2.VideoCapture(cam_url)
# So we store the string "0" and cast in the patched cnic.py below.
WEBCAM_URL   = "0"          # cv2.VideoCapture(0)  → built-in webcam
WEBCAM_CROP  = "0,0,640,480"  # startX, startY, width, height  (full frame)

def main():
    conn = psycopg2.connect(**DB)
    cur  = conn.cursor()

    # Show current cameras
    cur.execute("SELECT id, name, cam_url, crop, type FROM camera;")
    rows = cur.fetchall()
    print("\n📷 Current cameras in database:")
    for r in rows:
        print(f"  id={r[0]}  name={r[1]}  type={r[4]}  url={r[2]}  crop={r[3]}")

    # Update every CNIC camera to webcam 0
    cur.execute(
        "UPDATE camera SET cam_url = %s, crop = %s WHERE type = 'cnic';",
        (WEBCAM_URL, WEBCAM_CROP),
    )
    updated_cnic = cur.rowcount
    print(f"\n✅ Updated {updated_cnic} CNIC camera(s) → webcam device 0  (crop: {WEBCAM_CROP})")

    # Optionally disable number-plate cameras (set to device 99 = won't open)
    cur.execute(
        "UPDATE camera SET cam_url = %s, crop = %s WHERE type = 'num_plate_rfid';",
        ("99", "0,0,640,480"),
    )
    updated_np = cur.rowcount
    print(f"ℹ️  Updated {updated_np} number-plate camera(s) → device 99 (effectively disabled)")

    conn.commit()

    # Confirm
    cur.execute("SELECT id, name, cam_url, crop, type FROM camera;")
    rows = cur.fetchall()
    print("\n📷 Updated cameras in database:")
    for r in rows:
        print(f"  id={r[0]}  name={r[1]}  type={r[4]}  url={r[2]}  crop={r[3]}")

    cur.close()
    conn.close()
    print("\n✅ Done. OCR backend will now read from your built-in webcam.\n")

if __name__ == "__main__":
    main()
