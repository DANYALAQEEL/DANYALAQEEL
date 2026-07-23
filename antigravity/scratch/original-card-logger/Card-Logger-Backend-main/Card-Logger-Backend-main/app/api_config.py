from fastapi import FastAPI, Body, Depends, APIRouter
from starlette.middleware.cors import CORSMiddleware
from decouple import config

from app.auth.fastapi_auth_middlewares import JwtAuthMiddleware

from app.routes import auth_router
from app.routes import dashboard_router
from app.routes import id_card_camera_router
from app.routes import rtsp_streams
from app.routes import websockets
from app.routes import camera_router
from app.routes import number_plate_router

from app.utils.custom_cors_middleware import CustomCORSMiddleware

api_router = APIRouter()

def get_application() -> FastAPI:
    application = FastAPI(title=config("API_TITLE"), debug=True)

    api_router.include_router(auth_router.router, tags=["Auth"], prefix="/api/auth")
    api_router.include_router(dashboard_router.router, tags=["Dashboard"], prefix="/api/dashboard")
    api_router.include_router(id_card_camera_router.router, tags=["ID Card Camera"], prefix="/api/id-card-camera")
    api_router.include_router(rtsp_streams.router, tags=["RTSP Streams"], prefix="/api/rtsp-streams")
    api_router.include_router(websockets.router, tags=["Websockets"], prefix="/api/websockets")
    api_router.include_router(camera_router.router, tags=["Camera"], prefix="/api/camera")
    api_router.include_router(number_plate_router.router, tags=["Number Plate"], prefix="/api/number-plate")

    application.include_router(api_router, prefix="")

    # application.add_middleware(CustomCORSMiddleware)

    application.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # application.add_middleware(
    #     JwtAuthMiddleware,
    #     secret_key=config("SALT"),
    #     algorithms=[config("JWT_ALGORITHM"),],
    #     public_paths=["/docs", "/openapi.json", "/api/auth", "/api/websockets", "/api/rtsp-streams"],
    # )
    
    return application


app = get_application()
