import os
import sys

# Configure environment variables before importing decouple or SQLAlchemy
os.environ["DB_USER"] = "postgres"
os.environ["DB_PASSWORD"] = "postgres"
os.environ["DB_HOST"] = "localhost"
os.environ["DB_PORT"] = "5432"
os.environ["DB_NAME"] = "sgicl"

# Add current directory to path so python can resolve local packages
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy import text
from app.utils.database import Base, engine, SessionLocal
from app.models import Cnic, Timestamp, User, Role, CamType, Location, Camera, NumberPlateTimestamp, Guest
from datetime import datetime, timedelta

def main():
    print("Connecting to database and creating tables...")
    # Create all tables using SQLAlchemy Base metadata
    Base.metadata.create_all(bind=engine)
    print("Tables created successfully.")

    db = SessionLocal()
    try:
        # Create triggers and notification functions
        print("Creating PostgreSQL triggers and functions...")
        
        db.execute(text("""
        CREATE OR REPLACE FUNCTION notify_table_update()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
        BEGIN
            PERFORM pg_notify('table_update', 'Table updated');
            RETURN NULL;
        END;
        $$;
        """))
        
        db.execute(text("""
        CREATE OR REPLACE FUNCTION notify_num_plate_table_update()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        AS $$
        BEGIN
            PERFORM pg_notify('num_plate_table_update', 'Number plate table updated');
            RETURN NULL;
        END;
        $$;
        """))

        # Drop existing triggers if they exist, then recreate
        db.execute(text("DROP TRIGGER IF EXISTS table_update_trigger ON timestamp;"))
        db.execute(text("""
        CREATE TRIGGER table_update_trigger
        AFTER INSERT OR UPDATE OR DELETE ON timestamp
        FOR EACH STATEMENT EXECUTE FUNCTION notify_table_update();
        """))

        db.execute(text("DROP TRIGGER IF EXISTS notify_num_plate_table_update_trigger ON number_plate_timestamp;"))
        db.execute(text("""
        CREATE TRIGGER notify_num_plate_table_update_trigger
        AFTER INSERT OR UPDATE OR DELETE ON number_plate_timestamp
        FOR EACH STATEMENT EXECUTE FUNCTION notify_num_plate_table_update();
        """))

        db.commit()
        print("Triggers and functions configured.")

        # Seeding data
        print("Seeding default roles...")
        if not db.query(Role).filter(Role.role == "admin").first():
            db.add(Role(role="admin"))
            db.commit()

        print("Seeding default user...")
        from app.auth.security import encrypt_password
        
        johndoe_user = db.query(User).filter(User.username == "johndoe").first()
        if johndoe_user:
            if not johndoe_user.password.startswith("$2b$"):
                johndoe_user.password = encrypt_password("password123")
                db.commit()
        else:
            db.add(User(
                username="johndoe",
                name="John Doe",
                password=encrypt_password("password123"),
                role="admin",
                image_path="/images/user/user-01.png"
            ))
            db.commit()

        admin_user = db.query(User).filter(User.username == "admin").first()
        if admin_user:
            if not admin_user.password.startswith("$2b$"):
                admin_user.password = encrypt_password("admin")
                db.commit()
        else:
            db.add(User(
                username="admin",
                name="Administrator",
                password=encrypt_password("admin"),
                role="admin",
                image_path=""
            ))
            db.commit()

        print("Seeding camera types...")
        for t in ["cnic", "num_plate_rfid"]:
            if not db.query(CamType).filter(CamType.type == t).first():
                db.add(CamType(type=t))
        db.commit()

        print("Seeding default location...")
        loc = db.query(Location).filter(Location.id == 1).first()
        if not loc:
            loc = Location(id=1, coords="33.6844,73.0479", description="Main Entrance Gate")
            db.add(loc)
            db.commit()

        print("Seeding default cameras...")
        cam1 = db.query(Camera).filter(Camera.id == 1).first()
        if not cam1:
            cam1 = Camera(
                id=1,
                name="CNIC Scanner Camera",
                type="cnic",
                location_id=1,
                crop="0,0,640,480",
                cam_url="C:\\Users\\Administrator\\.gemini\\antigravity\\scratch\\card-logger-system\\OCR-Backend-main\\haarcascade_cars.xml", # Using an existing file so OpenCV VideoCapture opens
                thumbnail_path="thumbnails/1.jpg"
            )
            db.add(cam1)

        cam2 = db.query(Camera).filter(Camera.id == 2).first()
        if not cam2:
            cam2 = Camera(
                id=2,
                name="ANPR Camera 1",
                type="num_plate_rfid",
                location_id=1,
                crop="0,0,640,480",
                cam_url="C:\\Users\\Administrator\\.gemini\antigravity\\scratch\\card-logger-system\\OCR-Backend-main\\haarcascade_cars.xml",
                thumbnail_path="thumbnails/2.jpg"
            )
            db.add(cam2)
        db.commit()

        print("Seeding mock CNICs and logs...")
        mock_cnics = [
            Cnic(
                cnic="37405-1234567-1",
                name="Muhammad Ali",
                name_confidence=0.97,
                all_details="Identity Card scan for Muhammad Ali, Student Registration ID: SP23-BCS-041",
                cnic_img_path="37405-1234567-1"
            ),
            Cnic(
                cnic="61101-9876543-2",
                name="Ayesha Bibi",
                name_confidence=0.92,
                all_details="Identity Card scan for Ayesha Bibi, Faculty Department of Humanities",
                cnic_img_path="61101-9876543-2"
            )
        ]
        
        for c in mock_cnics:
            if not db.query(Cnic).filter(Cnic.cnic == c.cnic).first():
                db.add(c)
        db.commit()

        print("Seeding CNIC scan timestamps...")
        if db.query(Timestamp).count() == 0:
            db.add(Timestamp(cnic="37405-1234567-1", timestamp=datetime.now(), cam_id=1))
            db.add(Timestamp(cnic="61101-9876543-2", timestamp=datetime.now() - timedelta(minutes=15), cam_id=1))
            db.commit()

        print("Seeding mock plate timestamps...")
        if db.query(NumberPlateTimestamp).count() == 0:
            db.add(NumberPlateTimestamp(
                number_plate="RIW-4821",
                plate_confidence=0.94,
                timestamp=datetime.now(),
                img_path="number_plates/RIW-4821.jpg",
                cam_id=2
            ))
            db.add(NumberPlateTimestamp(
                number_plate="LE-20-8356",
                plate_confidence=0.87,
                timestamp=datetime.now() - timedelta(minutes=25),
                img_path="number_plates/LE-20-8356.jpg",
                cam_id=2
            ))
            db.commit()

        print("Database initialized and mock data seeded successfully!")
    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
        raise e
    finally:
        db.close()

if __name__ == "__main__":
    main()
