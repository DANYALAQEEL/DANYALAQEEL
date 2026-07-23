import uvicorn
from decouple import config

if __name__ == "__main__":
    uvicorn.run("app.api_config:app", host = config("API_IP"), port=int(config("API_PORT")),  reload=True)
