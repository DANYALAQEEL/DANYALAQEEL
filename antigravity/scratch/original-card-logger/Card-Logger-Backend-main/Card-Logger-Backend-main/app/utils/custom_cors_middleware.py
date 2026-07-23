from fastapi import FastAPI, Request, Response

class CustomCORSMiddleware:
    def __init__(self, app: FastAPI):
        self.app = app

    async def __call__(self, request: Request, response: Response):
        # Add your desired CORS headers here
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"

        # Call the next middleware or route handler
        await self.app(request, response)