from fastapi import APIRouter, Depends, Request, Response

from sqlalchemy.orm import Session

from app.cruds.cnic import get_cnics, get_total_cnics_count
from app.cruds.timestamp import get_timestamps_count_by_date, get_timestamps_count_for_24_hours, get_timestamps_count_by_current_week, get_timestamps_count_by_current_month, get_total_timestamp_count_for_current_week, get_total_timestamp_count_for_current_month, get_repeated_visitors_cnic

import datetime

from app.schemas.cnic import Cnic, CnicCreate
from app.schemas.timestamp import Timestamp, TimestampCreate    

from app.utils.database import Base, SessionLocal, get_db

router = APIRouter()

@router.get("/total-id-cards")
async def get_dashboard(request: Request, db: Session = Depends(get_db)):
    total_cards_for_day = get_timestamps_count_by_date(db, datetime.datetime.now().strftime("%Y-%m-%d"))
    total_cards_for_previous_day = get_timestamps_count_by_date(db, (datetime.datetime.now() - datetime.timedelta(days=1)).strftime("%Y-%m-%d"))

    cards_day_difference = total_cards_for_day - total_cards_for_previous_day

    if cards_day_difference > 0:
        card_difference_direction = "up"
    elif cards_day_difference < 0:
        card_difference_direction = "down"
    else:
        card_difference_direction = "same"

    if total_cards_for_previous_day == 0:
        cards_day_difference_percentage = 100
    else:
        cards_day_difference_percentage = (abs(cards_day_difference) / total_cards_for_previous_day) * 100
        cards_day_difference_percentage = round(cards_day_difference_percentage, 2)

    return {
        "status": True,
        "data": {
            "total_cards_for_day": total_cards_for_day,
            "cards_day_difference_percentage": cards_day_difference_percentage,
            "card_difference_direction": card_difference_direction,
        },
        "msg": "Total ID Cards for today"
    }

@router.get("/id-cards-stats-chart")
async def get_dashboard(request: Request, db: Session = Depends(get_db)):

    daily_stats = get_timestamps_count_for_24_hours(db)
    weekly_stats = get_timestamps_count_by_current_week(db)
    monthly_stats = get_timestamps_count_by_current_month(db)

    return {
        "status": True,
        "data": {
            "daily_stats": daily_stats,
            "weekly_stats": weekly_stats,
            "monthly_stats": monthly_stats
        },
        "msg": "ID Cards Stats Chart"
    }

@router.get("/total-cnics")
async def get_dashboard(request: Request, db: Session = Depends(get_db)):

    total_cnics = get_cnics(db)

    return {
        "status": True,
        "data": {
            "total_cnics": total_cnics
        },
        "msg": "Total CNICs"
    }

@router.get("/total-timestamps-stats")
async def get_dashboard(request: Request, db: Session = Depends(get_db)):

    total_timestamps_today = get_timestamps_count_by_date(db, datetime.datetime.now().strftime("%Y-%m-%d"))
    total_timestamps_week = get_total_timestamp_count_for_current_week(db)
    total_timestamps_month = get_total_timestamp_count_for_current_month(db)

    return {
        "status": True,
        "data": {
            "total_timestamps_today": total_timestamps_today,
            "total_timestamps_this_week": total_timestamps_week,
            "total_timestamps_this_month": total_timestamps_month
        },
        "msg": "Total Timestamps Stats"
    }

@router.get("/total-cnic-count")
async def get_dashboard(request: Request, db: Session = Depends(get_db)):
    
    total_cnics = get_total_cnics_count(db)

    return {
        "status": True,
        "data": {
            "total_cnics": str(total_cnics)
        },
       "msg": "Total CNICs"
    }

@router.get("/repeat-visitors")
async def get_dashboard(request: Request, db: Session = Depends(get_db)):

    repeat_visitors = get_repeated_visitors_cnic(db)

    return {
        "status": True,
        "data": {
            "repeat_visitors": repeat_visitors
        },
        "msg": "Repeat Visitors"
    }