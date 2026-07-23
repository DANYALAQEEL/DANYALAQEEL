from fastapi import APIRouter, Depends, HTTPException, Request

from sqlalchemy.orm import Session
from app.auth.security import encrypt_password, check_encrypted_password
from app.auth.auth_handler import signAndGetJWT, decodeJWT

from app.models import User
from app.utils.database import get_db

router = APIRouter()

# ---------------------------------------------------------------------------
# CHANGE LOG (documented per project Step 4):
#
# BEFORE: POST /sign-in ignored the request body entirely and returned a
# hardcoded admin token regardless of credentials — the `users` table was
# never consulted. That made real Profile/Settings pages impossible.
#
# NOW: /sign-in validates username/password against the `users` table.
# On a completely empty users table, the default account admin/admin is
# seeded on first sign-in so the system is never locked out (change the
# password immediately via Settings). The RESPONSE SHAPE is unchanged:
# {status, token, msg} — the existing frontend keeps working as-is.
#
# ADDED: GET /me and PUT /me (bearer token) to back the rebuilt
# Profile and Settings pages. Purely additive.
# ---------------------------------------------------------------------------

DEFAULT_ADMIN_USERNAME = "admin"
DEFAULT_ADMIN_PASSWORD = "admin"


def _get_bearer_username(request: Request) -> str:
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing bearer token")
    decoded = decodeJWT(auth[len("Bearer "):])
    if not decoded or "error" in decoded or "username" not in decoded:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return decoded["username"]


@router.post("/sign-in")
async def sign_in(request: Request, db: Session = Depends(get_db)):
    try:
        body = await request.json()
    except Exception:
        body = {}

    username = (body.get("username") or "").strip()
    password = body.get("password") or ""

    # First-run bootstrap: empty users table -> seed default admin.
    if db.query(User).count() == 0:
        db.add(
            User(
                username=DEFAULT_ADMIN_USERNAME,
                name="Administrator",
                password=encrypt_password(DEFAULT_ADMIN_PASSWORD),
                role="admin",
                image_path="",
            )
        )
        db.commit()

    user = db.query(User).filter(User.username == username).first()
    if user is None or not check_encrypted_password(password, user.password):
        return {"status": False, "token": None, "msg": "Invalid username or password"}

    token = signAndGetJWT(
        data={
            "username": user.username,
            "role": user.role or "admin",
            "expires": 10000,
            "image_url": user.image_path or "",
            "name": user.name or user.username,
        },
    )

    return {"status": True, "token": token, "msg": "Sign in"}


@router.get("/sign-out")
async def sign_out(request: Request):
    return {"status": True, "data": None, "msg": "Sign out"}


@router.get("/sign-up")
async def sign_up(request: Request):
    # Unchanged pre-existing GET stub. Kept identical in behavior so nothing
    # that relied on it breaks.
    return {"status": True, "data": None, "msg": "Sign up"}


@router.post("/sign-up")
async def sign_up_post(request: Request, db: Session = Depends(get_db)):
    # The frontend sign-up page POSTs here. The original backend only had a
    # GET stub, so this POST used to 405. Rather than fake a success that
    # creates nothing, create a real user. Kept open (self-service) to match
    # the original page's behavior.
    try:
        body = await request.json()
    except Exception:
        body = {}

    username = (body.get("username") or "").strip()
    password = body.get("password") or ""
    name = (body.get("name") or "").strip()
    role = (body.get("role") or "admin").strip()

    if not username or not password:
        return {"status": False, "data": None, "msg": "Username and password are required"}

    if db.query(User).filter(User.username == username).first() is not None:
        return {"status": False, "data": None, "msg": "That username is already taken"}

    db.add(
        User(
            username=username,
            name=name or username,
            password=encrypt_password(password),
            role=role,
            image_path="",
        )
    )
    db.commit()
    return {"status": True, "data": {"username": username}, "msg": "Sign up"}


@router.get("/me")
async def get_me(request: Request, db: Session = Depends(get_db)):
    username = _get_bearer_username(request)
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "status": True,
        "data": {
            "username": user.username,
            "name": user.name or "",
            "role": user.role or "",
            "image_path": user.image_path or "",
        },
        "msg": "Current user",
    }


@router.put("/me")
async def update_me(request: Request, db: Session = Depends(get_db)):
    username = _get_bearer_username(request)
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    try:
        body = await request.json()
    except Exception:
        raise HTTPException(status_code=422, detail="Invalid JSON body")

    if "name" in body and body["name"] is not None:
        user.name = str(body["name"]).strip()
    if "image_path" in body and body["image_path"] is not None:
        user.image_path = str(body["image_path"]).strip()
    if body.get("new_password"):
        current = body.get("current_password") or ""
        if not check_encrypted_password(current, user.password):
            raise HTTPException(status_code=403, detail="Current password is incorrect")
        if len(body["new_password"]) < 6:
            raise HTTPException(status_code=422, detail="New password must be at least 6 characters")
        user.password = encrypt_password(body["new_password"])

    db.commit()
    db.refresh(user)

    return {
        "status": True,
        "data": {
            "username": user.username,
            "name": user.name or "",
            "role": user.role or "",
            "image_path": user.image_path or "",
        },
        "msg": "Profile updated",
    }
