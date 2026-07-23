import datetime
from sqlalchemy.orm import Session
from database.schemas.timestamp import TimestampCreate
from database.models import Timestamp

from sqlalchemy import Time, cast, Date

def get_timestamps(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Timestamp).offset(skip).limit(limit).all()

def get_timestamps_descending(db: Session, skip: int = 0, limit: int = 400):
    return db.query(Timestamp).order_by(Timestamp.timestamp.desc()).offset(skip).limit(limit).all()

def get_timestamps_descending_by_camera_id(db: Session, camera_id: int, skip: int = 0, limit: int = 400):
    return db.query(Timestamp).filter(Timestamp.cam_id == camera_id).order_by(Timestamp.timestamp.desc()).offset(skip).limit(limit).all()

def create_timestamp(db: Session, timestamp: TimestampCreate):
    db_timestamp = Timestamp(**timestamp.model_dump())
    db.add(db_timestamp)
    db.commit()
    db.refresh(db_timestamp)

    return db_timestamp

def get_timestamps_by_cnic(db: Session, cnic: str):
    return db.query(Timestamp).filter(Timestamp.cnic == cnic).all()

def get_latest_timestamp_by_cnic(db: Session, cnic: str):
    return db.query(Timestamp).filter(Timestamp.cnic == cnic).order_by(Timestamp.timestamp.desc()).first()

def get_latest_timestamp(db: Session):
    return db.query(Timestamp).order_by(Timestamp.timestamp.desc()).first()

def get_latest_timestamp_by_camera_id(db: Session, camera_id: int):
    return db.query(Timestamp).filter(Timestamp.cam_id == camera_id).order_by(Timestamp.timestamp.desc()).first()

def get_timestamps_by_date(db: Session, date: str):
    return db.query(Timestamp).filter(cast(Timestamp.timestamp, Date) == date).all()

def get_timestamps_by_date_range(db: Session, start_date: str, end_date: str):
    return db.query(Timestamp).filter(Timestamp.timestamp.between(start_date, end_date)).all()

def get_timestamps_by_date_range_and_cnic(db: Session, start_date: str, end_date: str, cnic: str):
    return db.query(Timestamp).filter(Timestamp.timestamp.between(start_date, end_date), Timestamp.cnic == cnic).all()

def get_timestamps_count_by_date(db: Session, date: str):
    return db.query(Timestamp).filter(cast(Timestamp.timestamp, Date) == date).count()

def get_timestamps_count_by_date_range(db: Session, start_date: str, end_date: str):
    return db.query(Timestamp).filter(Timestamp.timestamp.between(start_date, end_date)).count()

def get_timestamps_count_by_hour_range(db: Session, start_hour: int, end_hour: int):
    return db.query(Timestamp).filter(cast(Timestamp.timestamp, Date) == datetime.datetime.now().strftime("%Y-%m-%d"), cast(Timestamp.timestamp, Time) >= start_hour, cast(Timestamp.timestamp, Time) <= end_hour).count()

def get_timestamps_count_for_24_hours(db: Session):
    # Get all timestamps for previous 24 hours
    timestamps = db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(hours=24)).strftime("%Y-%m-%d %H:%M:%S")).all()
    
    timestamps_count_by_hour = {}
    for timestamp in timestamps:
        hour = timestamp.timestamp.strftime("%Y-%m-%d %H:00:00")
        if hour in timestamps_count_by_hour:
            timestamps_count_by_hour[hour] += 1
        else:
            timestamps_count_by_hour[hour] = 1

    return timestamps_count_by_hour

def get_timestamps_count_by_current_week(db: Session):
    timestamps = db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=7)).strftime("%Y-%m-%d")).all()
    timestamps_count_by_date = {}
    for timestamp in timestamps:
        date = timestamp.timestamp.strftime("%Y-%m-%d")
        if date in timestamps_count_by_date:
            timestamps_count_by_date[date] += 1
        else:
            timestamps_count_by_date[date] = 1

    return timestamps_count_by_date
    

def get_timestamps_count_by_current_month(db: Session):
    timestamps = db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=30)).strftime("%Y-%m-%d")).all()
    timestamps_count_by_date = {}
    for timestamp in timestamps:
        date = timestamp.timestamp.strftime("%Y-%m-%d")
        if date in timestamps_count_by_date:
            timestamps_count_by_date[date] += 1
        else:
            timestamps_count_by_date[date] = 1

    return timestamps_count_by_date

def get_timestamps_count_by_current_year(db: Session):
    timestamps = db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=365)).strftime("%Y-%m-%d")).all()
    timestamps_count_by_date = {}
    for timestamp in timestamps:
        date = timestamp.timestamp.strftime("%Y-%m-%d")
        if date in timestamps_count_by_date:
            timestamps_count_by_date[date] += 1
        else:
            timestamps_count_by_date[date] = 1

    return timestamps_count_by_date

def get_total_timestamp_count_for_today(db: Session):
    return db.query(Timestamp).filter(cast(Timestamp.timestamp, Date) == datetime.datetime.now().strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_yesterday(db: Session):
    return db.query(Timestamp).filter(cast(Timestamp.timestamp, Date) == (datetime.datetime.now() - datetime.timedelta(days=1)).strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_last_week(db: Session):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=7)).strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_last_month(db: Session):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=30)).strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_last_year(db: Session):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=365)).strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_current_week(db: Session):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=datetime.datetime.now().weekday())).strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_current_month(db: Session):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=datetime.datetime.now().day)).strftime("%Y-%m-%d")).count()

def get_total_timestamp_count_for_current_year(db: Session):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(days=datetime.datetime.now().timetuple().tm_yday)).strftime("%Y-%m-%d")).count()

def get_repeated_visitors_cnic(db: Session):
    yesterday = (datetime.datetime.now() - datetime.timedelta(days=1)).strftime("%Y-%m-%d")
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    yesterday_cnics = db.query(Timestamp.cnic).filter(cast(Timestamp.timestamp, Date) == yesterday).all()
    today_cnics = db.query(Timestamp).filter(cast(Timestamp.timestamp, Date) == today).all()
    repeat_visitors = {}
    repeat_visitors = {}

    for cnic in today_cnics:
        for yesterday_cnic in yesterday_cnics:
            yesterday_cnic = yesterday_cnic[0]
            if cnic.cnic == yesterday_cnic:
                if cnic.cnic in repeat_visitors:
                    repeat_visitors[cnic.cnic] += 1
                else:
                    repeat_visitors[cnic.cnic] = 1
                break

    # TODO Top 5 CNICs with most repeat visits

    return repeat_visitors

def check_if_card_entered_in_last(db: Session, seconds: int, cnic: str):
    return db.query(Timestamp).filter(Timestamp.timestamp >= (datetime.datetime.now() - datetime.timedelta(seconds=seconds)).strftime("%Y-%m-%d %H:%M:%S"), Timestamp.cnic == cnic).count() > 0