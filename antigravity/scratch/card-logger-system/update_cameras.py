import psycopg2

VIDEO_PATH = r"C:\Users\Administrator\.gemini\antigravity\scratch\card-logger-system\OCR-Backend-main\demo_feed\cnic_demo.mp4"
CROP = "0,0,640,480"

conn = psycopg2.connect(
    host="localhost", port=5432,
    user="postgres", password="postgres", dbname="sgicl"
)
cur = conn.cursor()

cur.execute("UPDATE camera SET cam_url = %s, crop = %s WHERE type = 'cnic';", (VIDEO_PATH, CROP))
print("Updated cnic cameras:", cur.rowcount)
conn.commit()

cur.execute("SELECT id, name, cam_url, crop, type FROM camera;")
for r in cur.fetchall():
    print(r)

cur.close()
conn.close()
print("Done.")
