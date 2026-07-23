from decouple import config
from fastapi import APIRouter, Request, WebSocket, WebSocketDisconnect
from fastapi.websockets import WebSocketState
import asyncio
import asyncpg
import asyncpg.pool
from app.auth.auth_handler import decodeJWT

DATABASE_URL = f"postgresql://{config('DB_USER')}:{config('DB_PASSWORD')}@{config('DB_HOST')}:{config('DB_PORT')}/{config('DB_NAME')}"

router = APIRouter()

connected_clients = set()
num_plate_clients = set()

# Create a connection pool for the database
pool = None

async def get_db_pool():
    global pool
    if pool is None:
        pool = await asyncpg.create_pool(DATABASE_URL)
    return pool

async def notify_clients(message, clients=None):
    if clients:
        # List to hold clients that are still connected
        active_clients = set()
        for client in clients:
            if client.client_state == WebSocketState.CONNECTED:
                try:
                    await client.send_text(message)
                    active_clients.add(client)
                except RuntimeError as e:
                    print(f"Error sending message to client: {e}")
                except WebSocketDisconnect:
                    print("Client disconnected during message send")
        # Update clients with only active clients
        clients.intersection_update(active_clients)

@router.websocket("/card-update")
async def websocket_endpoint(websocket: WebSocket):
    global connected_clients
    await websocket.accept()    
    connected_clients.add(websocket)
    try:
        conn = await get_db_pool()
        async with conn.acquire() as connection:
            await connection.add_listener('table_update', lambda *args: asyncio.create_task(notify_clients('Table updated', connected_clients)))
            while True:
                if websocket.client_state != WebSocketState.CONNECTED:
                    break
                await asyncio.sleep(2)
    except WebSocketDisconnect:
        print("Client disconnected")
    finally:
        connected_clients.discard(websocket)

@router.websocket("/num-plate-update")
async def websocket_endpoint(websocket: WebSocket):
    global num_plate_clients
    await websocket.accept()
    num_plate_clients.add(websocket)
    try:
        conn = await get_db_pool()
        async with conn.acquire() as connection:
            await connection.add_listener(
                "num_plate_table_update",
                lambda *args: asyncio.create_task(
                    notify_clients("Number plate updated", num_plate_clients)
                ),
            )
            while True:
                if websocket.client_state != WebSocketState.CONNECTED:
                    break
                await asyncio.sleep(2)
    except WebSocketDisconnect:
        print("Client disconnected")
    finally:
        num_plate_clients.discard(websocket)
