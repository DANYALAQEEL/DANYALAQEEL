from fastapi import APIRouter, Depends, Request

from sqlalchemy.orm import Session
from app.auth.security import encrypt_password, check_encrypted_password
from app.auth.auth_handler import signAndGetJWT

router = APIRouter()

@router.post("/sign-in")
async def sign_in(request: Request):

    token = signAndGetJWT(
        data={
            "username": "admin",
            "role": "admin",
            "expires": 10000,
            "image_url": "https://www.google.com",
            "name": "admin"
        },
    )

    return {
        "status": True,
        "token": token,
        "msg": "Sign in"
    }

@router.get("/sign-out")
async def sign_out(request: Request):
    return {
        "status": True,
        "data": None,
        "msg": "Sign out"
    }

@router.get("/sign-up")
async def sign_up(request: Request):



    return {
        "status": True,
        "data": None,
        "msg": "Sign up"
    }
