from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

import os
import uuid
import logging
import asyncio
from datetime import datetime, timezone, timedelta, date as date_cls
from typing import List, Optional

import bcrypt
import jwt
import resend
from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from mongomock_motor import AsyncMongoMockClient as AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, ConfigDict

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]
JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"
ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "admin@axisbarber.co").lower()
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
SHOP_NAME = os.environ.get("SHOP_NAME", "AXIS // Barber Co.")
SHOP_EMAIL = os.environ.get("SHOP_EMAIL", "hello@axisbarber.co")

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("axis-barber")

app = FastAPI(title="AXIS Barber API")
api_router = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)


# ---------------------------------------------------------------------------
# Helpers — auth
# ---------------------------------------------------------------------------
def hash_password(plain: str) -> str:
    return bcrypt.hashpw(plain.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(hours=12),
        "type": "access",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_admin(
    request: Request,
    creds: Optional[HTTPAuthorizationCredentials] = Depends(security),
) -> dict:
    token = None
    if creds and creds.scheme.lower() == "bearer":
        token = creds.credentials
    if not token:
        token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
        user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
        if not user or user.get("role") != "admin":
            raise HTTPException(status_code=401, detail="Not authorised")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------
class Service(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    description: str
    price: float
    duration_min: int
    image: Optional[str] = None
    order: int = 0


class Barber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    title: str
    bio: str
    image: str
    order: int = 0


class AppointmentCreate(BaseModel):
    service_id: str
    barber_id: str
    date: str  # YYYY-MM-DD
    time: str  # HH:MM (24h)
    customer_name: str = Field(min_length=2, max_length=80)
    customer_email: EmailStr
    customer_phone: str = Field(min_length=5, max_length=30)
    notes: Optional[str] = Field(default="", max_length=400)


class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    service_id: str
    service_name: str
    service_price: float
    service_duration_min: int
    barber_id: str
    barber_name: str
    date: str
    time: str
    customer_name: str
    customer_email: str
    customer_phone: str
    notes: str = ""
    status: str = "confirmed"  # confirmed | completed | cancelled
    created_at: str


class StatusUpdate(BaseModel):
    status: str  # confirmed | completed | cancelled


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# ---------------------------------------------------------------------------
# Seed data
# ---------------------------------------------------------------------------
DEFAULT_SERVICES = [
    {
        "id": "svc-signature-cut",
        "name": "Signature Cut",
        "description": "Precision haircut with consultation, wash, scissor and clipper work, and a clean finish.",
        "price": 45.0,
        "duration_min": 45,
        "image": "https://images.pexels.com/photos/19287846/pexels-photo-19287846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 1,
    },
    {
        "id": "svc-skin-fade",
        "name": "Skin Fade",
        "description": "Sharp, taper-to-skin fade with razor detailing along the hairline.",
        "price": 55.0,
        "duration_min": 50,
        "image": "https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 2,
    },
    {
        "id": "svc-beard-sculpt",
        "name": "Beard Sculpt",
        "description": "Full beard shape, line-up and hot towel finish to leave the skin calm.",
        "price": 30.0,
        "duration_min": 30,
        "image": "https://images.pexels.com/photos/10775081/pexels-photo-10775081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 3,
    },
    {
        "id": "svc-straight-razor",
        "name": "Straight Razor Shave",
        "description": "Traditional hot-towel straight razor shave, balm and cold towel finish.",
        "price": 40.0,
        "duration_min": 40,
        "image": "https://images.pexels.com/photos/10775081/pexels-photo-10775081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 4,
    },
    {
        "id": "svc-cut-beard",
        "name": "Cut + Beard",
        "description": "Signature cut paired with full beard sculpt. The complete reset.",
        "price": 70.0,
        "duration_min": 75,
        "image": "https://images.pexels.com/photos/30716347/pexels-photo-30716347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 5,
    },
]

DEFAULT_BARBERS = [
    {
        "id": "br-marco-alvarez",
        "name": "Marco Alvarez",
        "title": "Master Barber · Founder",
        "bio": "Twelve years on the chair. Spent four of them in Lisbon learning straight-razor work.",
        "image": "https://images.pexels.com/photos/30716347/pexels-photo-30716347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 1,
    },
    {
        "id": "br-jonah-reid",
        "name": "Jonah Reid",
        "title": "Senior Stylist",
        "bio": "Specialist in sharp fades and modern textured cuts. Trained in London.",
        "image": "https://images.pexels.com/photos/19287846/pexels-photo-19287846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 2,
    },
    {
        "id": "br-eli-tanaka",
        "name": "Eli Tanaka",
        "title": "Barber",
        "bio": "Quiet hands, clean lines. Loves a precision parting and a hot-towel finish.",
        "image": "https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "order": 3,
    },
]

# 30-min slots from 09:00 to 18:30
TIME_SLOTS = [
    f"{h:02d}:{m:02d}" for h in range(9, 19) for m in (0, 30)
]


# ---------------------------------------------------------------------------
# Email
# ---------------------------------------------------------------------------
def _booking_email_html(appt: dict) -> str:
    pretty_date = appt["date"]
    return f"""
<!doctype html><html><body style="margin:0;padding:0;background:#fafafa;font-family:Arial,Helvetica,sans-serif;color:#0a0a0a;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fafafa;padding:40px 0;">
  <tr><td align="center">
    <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="background:#ffffff;border:1px solid #e4e4e7;">
      <tr><td style="padding:32px 40px;border-bottom:1px solid #e4e4e7;">
        <div style="font-size:11px;letter-spacing:3px;color:#71717a;text-transform:uppercase;">{SHOP_NAME}</div>
        <div style="font-size:28px;font-weight:900;letter-spacing:-1px;margin-top:8px;">Booking confirmed.</div>
      </td></tr>
      <tr><td style="padding:28px 40px;">
        <p style="font-size:14px;line-height:1.6;color:#3f3f46;margin:0 0 18px 0;">Hi {appt['customer_name']},<br/>your chair is reserved. Details below.</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e4e4e7;">
          <tr><td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:11px;letter-spacing:2px;color:#71717a;text-transform:uppercase;">Service</td>
              <td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:14px;text-align:right;font-weight:600;">{appt['service_name']}</td></tr>
          <tr><td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:11px;letter-spacing:2px;color:#71717a;text-transform:uppercase;">Barber</td>
              <td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:14px;text-align:right;font-weight:600;">{appt['barber_name']}</td></tr>
          <tr><td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:11px;letter-spacing:2px;color:#71717a;text-transform:uppercase;">Date</td>
              <td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:14px;text-align:right;font-weight:600;">{pretty_date} · {appt['time']}</td></tr>
          <tr><td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:11px;letter-spacing:2px;color:#71717a;text-transform:uppercase;">Duration</td>
              <td style="padding:14px 0;border-bottom:1px solid #e4e4e7;font-size:14px;text-align:right;font-weight:600;">{appt['service_duration_min']} min</td></tr>
          <tr><td style="padding:14px 0;font-size:11px;letter-spacing:2px;color:#71717a;text-transform:uppercase;">Price</td>
              <td style="padding:14px 0;font-size:14px;text-align:right;font-weight:600;">${appt['service_price']:.2f}</td></tr>
        </table>
        <p style="font-size:13px;line-height:1.6;color:#52525b;margin-top:24px;">Need to reschedule? Reply to this email or call the shop.</p>
      </td></tr>
      <tr><td style="padding:24px 40px;background:#0a0a0a;color:#fafafa;font-size:11px;letter-spacing:3px;text-transform:uppercase;">{SHOP_NAME}</td></tr>
    </table>
  </td></tr></table></body></html>
""".strip()


async def send_booking_email(appt: dict) -> bool:
    if not RESEND_API_KEY:
        logger.info("RESEND_API_KEY not configured — skipping email send.")
        return False
    params = {
        "from": SENDER_EMAIL,
        "to": [appt["customer_email"]],
        "subject": f"Your booking at {SHOP_NAME} is confirmed",
        "html": _booking_email_html(appt),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info("Sent booking email id=%s", result.get("id") if isinstance(result, dict) else result)
        return True
    except Exception as e:  # pragma: no cover
        logger.error("Failed to send booking email: %s", e)
        return False


# ---------------------------------------------------------------------------
# Routes — public
# ---------------------------------------------------------------------------
@api_router.get("/")
async def root():
    return {"name": SHOP_NAME, "ok": True}


@api_router.get("/services", response_model=List[Service])
async def list_services():
    docs = await db.services.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    return docs


@api_router.get("/barbers", response_model=List[Barber])
async def list_barbers():
    docs = await db.barbers.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    return docs


@api_router.get("/availability")
async def availability(barber_id: str, date: str):
    # Validate date string
    try:
        date_cls.fromisoformat(date)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date — expected YYYY-MM-DD")
    booked_docs = await db.appointments.find(
        {"barber_id": barber_id, "date": date, "status": {"$ne": "cancelled"}},
        {"_id": 0, "time": 1},
    ).to_list(200)
    booked = {d["time"] for d in booked_docs}
    return {
        "date": date,
        "barber_id": barber_id,
        "slots": [{"time": t, "available": t not in booked} for t in TIME_SLOTS],
    }


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(payload: AppointmentCreate):
    if payload.time not in TIME_SLOTS:
        raise HTTPException(status_code=400, detail="Time slot not offered")
    try:
        booking_date = date_cls.fromisoformat(payload.date)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date")
    if booking_date < datetime.now(timezone.utc).date():
        raise HTTPException(status_code=400, detail="Cannot book a past date")

    service = await db.services.find_one({"id": payload.service_id}, {"_id": 0})
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    barber = await db.barbers.find_one({"id": payload.barber_id}, {"_id": 0})
    if not barber:
        raise HTTPException(status_code=404, detail="Barber not found")

    clash = await db.appointments.find_one({
        "barber_id": payload.barber_id,
        "date": payload.date,
        "time": payload.time,
        "status": {"$ne": "cancelled"},
    }, {"_id": 0})
    if clash:
        raise HTTPException(status_code=409, detail="That slot was just taken — please pick another time.")

    appt = {
        "id": str(uuid.uuid4()),
        "service_id": service["id"],
        "service_name": service["name"],
        "service_price": float(service["price"]),
        "service_duration_min": int(service["duration_min"]),
        "barber_id": barber["id"],
        "barber_name": barber["name"],
        "date": payload.date,
        "time": payload.time,
        "customer_name": payload.customer_name.strip(),
        "customer_email": payload.customer_email.lower(),
        "customer_phone": payload.customer_phone.strip(),
        "notes": (payload.notes or "").strip(),
        "status": "confirmed",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.appointments.insert_one(dict(appt))  # copy so insert_one's _id mutation doesn't leak
    asyncio.create_task(send_booking_email(appt))
    return appt


# ---------------------------------------------------------------------------
# Routes — admin auth
# ---------------------------------------------------------------------------
@api_router.post("/auth/login")
async def admin_login(payload: LoginRequest):
    email = payload.email.lower()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Not an admin account")
    token = create_access_token(user["id"], email)
    return {
        "token": token,
        "user": {"id": user["id"], "email": email, "name": user.get("name", "Admin"), "role": "admin"},
    }


@api_router.get("/auth/me")
async def whoami(current=Depends(get_current_admin)):
    return current


# ---------------------------------------------------------------------------
# Routes — admin appointments
# ---------------------------------------------------------------------------
@api_router.get("/admin/appointments", response_model=List[Appointment])
async def admin_list_appointments(
    scope: str = "upcoming",  # today | upcoming | history | all
    current=Depends(get_current_admin),
):
    today = datetime.now(timezone.utc).date().isoformat()
    query: dict = {}
    if scope == "today":
        query = {"date": today}
    elif scope == "upcoming":
        query = {"date": {"$gte": today}, "status": {"$ne": "cancelled"}}
    elif scope == "history":
        query = {"$or": [{"date": {"$lt": today}}, {"status": "cancelled"}, {"status": "completed"}]}
    docs = await db.appointments.find(query, {"_id": 0}).sort([("date", 1), ("time", 1)]).to_list(500)
    return docs


@api_router.patch("/admin/appointments/{appt_id}/status", response_model=Appointment)
async def admin_update_status(appt_id: str, payload: StatusUpdate, current=Depends(get_current_admin)):
    if payload.status not in {"confirmed", "completed", "cancelled"}:
        raise HTTPException(status_code=400, detail="Invalid status")
    result = await db.appointments.find_one_and_update(
        {"id": appt_id},
        {"$set": {"status": payload.status}},
        return_document=True,
        projection={"_id": 0},
    )
    if not result:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return result


@api_router.delete("/admin/appointments/{appt_id}")
async def admin_delete_appointment(appt_id: str, current=Depends(get_current_admin)):
    res = await db.appointments.delete_one({"id": appt_id})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return {"ok": True}


@api_router.get("/admin/stats")
async def admin_stats(current=Depends(get_current_admin)):
    today = datetime.now(timezone.utc).date().isoformat()
    week_end = (datetime.now(timezone.utc).date() + timedelta(days=7)).isoformat()

    appointments_today = await db.appointments.count_documents(
        {"date": today, "status": {"$ne": "cancelled"}}
    )
    upcoming_week = await db.appointments.count_documents(
        {"date": {"$gte": today, "$lte": week_end}, "status": {"$ne": "cancelled"}}
    )
    total_confirmed = await db.appointments.count_documents({"status": "confirmed"})
    pipe = [
        {"$match": {"status": {"$in": ["confirmed", "completed"]}, "date": {"$gte": today}}},
        {"$group": {"_id": None, "total": {"$sum": "$service_price"}}},
    ]
    rev = await db.appointments.aggregate(pipe).to_list(1)
    revenue_pipeline = float(rev[0]["total"]) if rev else 0.0
    barbers_count = await db.barbers.count_documents({})
    return {
        "appointments_today": appointments_today,
        "upcoming_week": upcoming_week,
        "total_confirmed": total_confirmed,
        "revenue_pipeline": revenue_pipeline,
        "barbers_count": barbers_count,
    }


# ---------------------------------------------------------------------------
# Startup
# ---------------------------------------------------------------------------
@app.on_event("startup")
async def on_startup():
    await db.users.create_index("email", unique=True)
    await db.appointments.create_index([("barber_id", 1), ("date", 1), ("time", 1)])

    # Seed services
    for svc in DEFAULT_SERVICES:
        await db.services.update_one({"id": svc["id"]}, {"$set": svc}, upsert=True)
    # Seed barbers
    for br in DEFAULT_BARBERS:
        await db.barbers.update_one({"id": br["id"]}, {"$set": br}, upsert=True)
    # Seed admin
    existing = await db.users.find_one({"email": ADMIN_EMAIL})
    if existing is None:
        await db.users.insert_one({
            "id": str(uuid.uuid4()),
            "email": ADMIN_EMAIL,
            "password_hash": hash_password(ADMIN_PASSWORD),
            "name": "Admin",
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info("Seeded admin user %s", ADMIN_EMAIL)
    elif not verify_password(ADMIN_PASSWORD, existing["password_hash"]):
        await db.users.update_one(
            {"email": ADMIN_EMAIL},
            {"$set": {"password_hash": hash_password(ADMIN_PASSWORD), "role": "admin"}},
        )
        logger.info("Refreshed admin password for %s", ADMIN_EMAIL)


@app.on_event("shutdown")
async def on_shutdown():
    client.close()


app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)
