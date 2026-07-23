from typing import List

import jwt
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from starlette.middleware.base import BaseHTTPMiddleware


class JwtAuthMiddleware(BaseHTTPMiddleware):
    def __init__(
        self,
        app: FastAPI,
        secret_key: str,
        algorithms: List[str] = ["HS256"],
        public_paths: List[str] = [],
    ):
        super().__init__(app)
        self.secret_key = secret_key
        self.algorithms = algorithms
        self.public_paths = public_paths

    async def dispatch(
        self,
        request: Request,
        call_next,
    ):
        if any(request.url.path.startswith(path) for path in self.public_paths):
            response = await call_next(request)
            return response
        
        #check to ignore OPTIONS method
        if request.method == "OPTIONS":
            print("OPTIONS method")
            response = await call_next(request)
            return response


        authorization_header = request.headers.get("Authorization")

        if not authorization_header or not authorization_header.startswith("Bearer "):
            return JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"message": "Invalid Credentials."},
            )

        token = authorization_header.split("Bearer ")[1]
        
        if token[0] == '"':
            token = token[1:-1]
        

        print("token", token)

        try:
            decoded_token = jwt.decode(
                token,
                key=self.secret_key,
                algorithms=self.algorithms,
            )
        except ExpiredSignatureError as exc:
            return JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"message": f"Token has expired. {str(exc)}."},
            )
        except InvalidTokenError as exc:
            return JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"message": f"Invalid Token. {str(exc)}."},
            )

        except Exception as exc:
            return JSONResponse(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                content={"message": f"Invalid Credentials. {str(exc)}."},
            )
        request.state.user = decoded_token
        response = await call_next(request)
        return response
