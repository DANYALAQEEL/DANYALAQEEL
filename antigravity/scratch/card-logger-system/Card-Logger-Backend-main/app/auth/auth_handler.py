import time
from typing import Dict

from jose import jwt
from jose.exceptions import ExpiredSignatureError

from decouple import config # type: ignore


SECRET_KEY = config("SALT")
JWT_ALGORITHM = config("JWT_ALGORITHM")


def signAndGetJWT(data: Dict) -> str:
    payload = {
        **data,
        "expires": time.time() + 600
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm=JWT_ALGORITHM)  #type: ignore

    return token


def decodeJWT(token: str) -> dict:
    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[JWT_ALGORITHM], options={"headers": True,})  #type: ignore
        status = time.time() - decoded_token["expires"] <= 0

        ## TODO: Uncomment this after testing

        # if status is True:
        #     return decoded_token
        # else:

        # return {"status" : status}
        return decoded_token
    except ExpiredSignatureError as e:
        return {
            "error": "Token has expired"
        }
    except Exception as e:
        return {
            "error": "Invalid token"
        }
    
def getRole(token: str) -> str:
    decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[JWT_ALGORITHM])  #type: ignore
    return decoded_token["role"]

def getUsername(token: str) -> str:
    decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[JWT_ALGORITHM])  #type: ignore
    return decoded_token["username"]