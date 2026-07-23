import os
from fastapi import APIRouter, Depends, HTTPException, Request, WebSocket, Body

from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.cruds.cnic import get_cnics, create_cnic, get_vip, get_vips
from app.cruds.timestamp import get_latest_timestamp, get_timestamps_descending, get_timestamps_descending_by_camera_id, get_latest_timestamp_by_camera_id

import datetime

from app.schemas.cnic import Cnic, CnicCreate
from app.utils.database import Base, SessionLocal, get_db
from typing import List

router = APIRouter()

@router.get("/cnic-timestamps-all")
async def get_cnics_route(request: Request, db: Session = Depends(get_db)):
    cnics = get_cnics(db)

    data = []

    try:
        
        # get timestamps for three days
        timestamps = get_timestamps_descending(db, limit=400)
        for timestamp in timestamps:
            data.append({
                "id": timestamp.cnic,
                "name": timestamp.cnics.name,
                "timestamp": timestamp.timestamp,
                "imagePath": timestamp.cnics.cnic_img_path,
                "allDetails": timestamp.cnics.all_details
            })

        # Sort by timestamp
        data = sorted(data, key=lambda x: x["timestamp"], reverse=True)

    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving CNICs: {str(e.args[0])}"
        }


    return {
        "status": True,
        "data": data,
        "msg": "CNICs retrieved successfully"
    }

@router.get("/cnic-timestamps/{camera_id}")
def get_cnics_by_camera_id_route(camera_id: int, db: Session = Depends(get_db)):
    cnics = get_cnics(db)

    data = []

    try:
        
        # get timestamps for three days
        timestamps = get_timestamps_descending_by_camera_id(db, camera_id, limit=400)
        for timestamp in timestamps:
            data.append({
                "id": timestamp.cnic,
                "name": timestamp.cnics.name,
                "timestamp": timestamp.timestamp,
                "imagePath": timestamp.cnics.cnic_img_path,
                "allDetails": timestamp.cnics.all_details,
                "isVip": timestamp.cnics.is_vip,
            })

        # Sort by timestamp
        data = sorted(data, key=lambda x: x["timestamp"], reverse=True)

    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving CNICs: {str(e.args[0])}"
        }


    return {
        "status": True,
        "data": data,
        "msg": "CNICs retrieved successfully"
    }
    
@router.get("/get-registered-vips")
def get_cnics_by_camera_id_route(db: Session = Depends(get_db)):
    try:
        cnics = get_vips(db)
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving VIPs: {str(e.args[0])}"
        }
        
    return {
        "status": True,
        "data": cnics,
        "msg": "VIPs retrieved successfully"
    }

import traceback
@router.post("/register-vip")
async def add_vip(cnic: CnicCreate, db: Session = Depends(get_db)):
    try:
        # Execute query to insert VIP
        vip = get_vip(cnic.cnic, db)
        if vip:
            vip.is_vip = True
            db.commit()
        else:
            create_cnic(db, cnic)
        
        return {
            "success": True,
            "message": "VIP registered successfully",
        }
        
    except Exception as e:
        db.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Failed to register VIP")
    
    
@router.post("/register-vips-batch")
async def add_vips_batch(payload: dict | List[CnicCreate] = Body(...), db: Session = Depends(get_db)):
    # Accept BOTH payload shapes so neither frontend generation breaks:
    #   - a raw JSON array         [ {cnic, name}, ... ]   (original contract)
    #   - a wrapped object         { "vips": [ ... ] }      (current UI sends this)
    if isinstance(payload, dict):
        raw_list = payload.get("vips", [])
        cnics = [CnicCreate(**item) if isinstance(item, dict) else item for item in raw_list]
    else:
        cnics = payload
    try:
        results = []
        for cnic_data in cnics:
            try:
                vip = get_vip(cnic_data.cnic, db)
                if vip:
                    vip.is_vip = True
                    # vip.name = cnic_data.name  # Update name if provided
                else:
                    # Ensure a newly-created batch entry is actually flagged VIP.
                    # (CnicCreate.is_vip defaults to False, so force it here.)
                    cnic_data.is_vip = True
                    create_cnic(db, cnic_data)
                results.append({"cnic": cnic_data.cnic, "success": True})
            except Exception as e:
                results.append({"cnic": cnic_data.cnic, "success": False, "error": str(e)})
        
        db.commit()
        
        successful = len([r for r in results if r["success"]])
        return {
            "success": True,
            "message": f"{successful}/{len(cnics)} VIPs registered successfully",
            "results": results
        }
        
    except Exception as e:
        db.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Failed to register VIPs")
    
    
@router.delete("/remove-vip")
async def remove_vip(cnic: CnicCreate, db: Session = Depends(get_db)):
    try:
        vip = get_vip(cnic.cnic, db)
        if not vip:
            raise HTTPException(status_code=404, detail="CNIC not found")

        if not vip.is_vip:
            return {"success": False, "message": "CNIC is not registered as VIP"}

        vip.is_vip = False
        db.commit()

        return {"success": True, "message": "VIP removed successfully"}

    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Failed to remove VIP")

@router.get("/cnic-timestamp-latest")
async def get_cnics_route(request: Request, db: Session = Depends(get_db)):
    
    try:
        latest_timestamp = get_latest_timestamp(db)
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving latest timestamp: {str(e.args[0])}"
        }
    
    # id={latestIDCard.id}
    #                         name={latestIDCard.name}
    #                         timestamp={latestIDCard.timestamp}
    #                         imagePath={latestIDCard.imagePath}
    #                         allDetails={latestIDCard.allDetails}

    return {
        "status": True,
        "data": {
            "id": latest_timestamp.cnic,
            "name": latest_timestamp.cnics.name,
            "timestamp": latest_timestamp.timestamp,
            "imagePath": latest_timestamp.cnics.cnic_img_path,
            "allDetails": latest_timestamp.cnics.all_details
        },
        "msg": "Latest timestamp retrieved successfully"
    }

@router.get("/cnic-timestamp-latest/{camera_id}")
async def get_cnics_route(camera_id: int, db: Session = Depends(get_db)):
    
    try:
        latest_timestamp = get_latest_timestamp_by_camera_id(db, camera_id)
    except Exception as e:
        return {
            "status": False,
            "data": None,
            "msg": f"Error retrieving latest timestamp: {str(e.args[0])}"
        }
    
    # id={latestIDCard.id}
    #                         name={latestIDCard.name}
    #                         timestamp={latestIDCard.timestamp}
    #                         imagePath={latestIDCard.imagePath}
    #                         allDetails={latestIDCard.allDetails}

    return {
        "status": True,
        "data": {
            "id": latest_timestamp.cnics.cnic,
            "name": latest_timestamp.cnics.name,
            "timestamp": latest_timestamp.timestamp,
            "imagePath": latest_timestamp.cnics.cnic_img_path,
            "allDetails": latest_timestamp.cnics.all_details,
            "isVip": latest_timestamp.cnics.is_vip
        },
        "msg": "Latest timestamp retrieved successfully"
    }


# router.get("/cnic/image/:path", async (req, res) => {
#     try {
#         const path = req.params.path;
#         const img = fs.readFileSync("cnics/" + path + ".jpg");
#         res.writeHead(200, { 'Content-Type': 'image/jpg' });
#         res.end(img, 'binary');
#     } catch (err) {
#         console.error(err.message);
#         res.status(500).send(err.message);
#     }
# });

@router.get("/cnic-timestamp-latest-image/{path}")
async def get_image(request: Request, path: str):
    file_path = f"cnics/{path}.jpg"
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type='image/jpg')
    
    file_path_png = f"cnics/{path}.png"
    if os.path.exists(file_path_png):
        return FileResponse(file_path_png, media_type='image/png')
    
    # Return placeholder image to prevent broken image UI
    import numpy as np
    import cv2
    from fastapi.responses import Response
    img = np.zeros((150, 250, 3), dtype=np.uint8) + 240
    cv2.rectangle(img, (10, 10), (240, 140), (200, 200, 200), 1)
    cv2.putText(img, "CNIC PHOTO", (75, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (120, 120, 120), 1)
    cv2.putText(img, path, (20, 95), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (150, 150, 150), 1)
    _, buffer = cv2.imencode('.jpg', img)
    return Response(content=buffer.tobytes(), media_type="image/jpeg")

# ---------------------------------------------------------------------------
# GUEST REGISTRATION (additive — restores the original frontend contract).
#
# The original frontend shipped a "Guest Registration" page calling the four
# endpoints below, but no backend for them ever existed in this repo — the
# page 404'd. These endpoints implement that contract for real, backed by the
# new `guest` table (app/models/guest.py). Guests are a general visitor log,
# fully independent from the VIP flag (`cnic.is_vip`) and the VIP endpoints
# above — do not merge the two features.
# ---------------------------------------------------------------------------

from app.cruds.guest import get_guests, create_guest, remove_guest
from app.schemas.guest import GuestCreate


@router.get("/get-registered-guests")
def get_registered_guests_route(db: Session = Depends(get_db)):
    try:
        guests = get_guests(db)
        data = []
        for guest in guests:
            data.append({
                "guest_id": guest.guest_id,
                "cnic_id": guest.cnic_id,
                "added_at": guest.added_at,
                # Shape matches what the original Guest Registration UI
                # rendered: guest.cnic.{name, cnic, cnic_img_path,
                # name_confidence, all_details}
                "cnic": {
                    "name": guest.cnic.name if guest.cnic else "",
                    "cnic": guest.cnic.cnic if guest.cnic else guest.cnic_id,
                    "cnic_img_path": guest.cnic.cnic_img_path if guest.cnic else "",
                    "name_confidence": guest.cnic.name_confidence if guest.cnic else 0,
                    "all_details": guest.cnic.all_details if guest.cnic else "",
                },
            })
        return {"status": True, "data": data, "msg": "Registered guests"}
    except Exception as e:
        return {"status": False, "data": [], "msg": f"Error retrieving guests: {str(e)}"}


@router.post("/register-guest")
async def register_guest_route(guest: GuestCreate, db: Session = Depends(get_db)):
    if not guest.cnic_id:
        raise HTTPException(status_code=422, detail="cnic_id (or cnic) is required")
    try:
        db_guest = create_guest(db, guest)
        return {
            "status": True,
            "data": {"guest_id": db_guest.guest_id, "cnic_id": db_guest.cnic_id},
            "msg": "Guest registered",
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error registering guest: {str(e)}")


@router.post("/register-guests-batch")
async def register_guests_batch_route(guests: List[GuestCreate], db: Session = Depends(get_db)):
    registered, failed = 0, 0
    for guest in guests:
        if not guest.cnic_id:
            failed += 1
            continue
        try:
            create_guest(db, guest)
            registered += 1
        except Exception:
            failed += 1
    return {
        "status": True,
        "data": {"registered": registered, "failed": failed},
        "msg": f"Registered {registered} guest(s)" + (f", {failed} failed" if failed else ""),
    }


@router.delete("/remove-guest")
async def remove_guest_route(guest: GuestCreate, db: Session = Depends(get_db)):
    if not guest.cnic_id:
        raise HTTPException(status_code=422, detail="cnic_id (or cnic) is required")
    removed = remove_guest(db, guest.cnic_id)
    if not removed:
        raise HTTPException(status_code=404, detail="Guest not found")
    return {"status": True, "data": None, "msg": "Guest removed"}


# ---------------------------------------------------------------------------
# CNIC FREQUENCY BY DATE RANGE (additive).
# The original "CNIC Count" analytics page called this endpoint; it never
# existed in the backend. Response shape matches that page's expectation:
# [{cnic, count, cam_id: [...], timestamp: [...]}]
# ---------------------------------------------------------------------------

from app.models import Timestamp as TimestampModel


@router.get("/cnic-count")
def get_cnic_count_route(start_date: str, end_date: str, db: Session = Depends(get_db)):
    try:
        start = datetime.datetime.strptime(start_date, "%Y-%m-%d")
        end = datetime.datetime.strptime(end_date, "%Y-%m-%d") + datetime.timedelta(days=1)

        rows = (
            db.query(TimestampModel)
            .filter(TimestampModel.timestamp >= start, TimestampModel.timestamp < end)
            .order_by(TimestampModel.timestamp.desc())
            .all()
        )

        grouped = {}
        for row in rows:
            entry = grouped.setdefault(row.cnic, {"cnic": row.cnic, "count": 0, "cam_id": [], "timestamp": []})
            entry["count"] += 1
            entry["cam_id"].append(row.cam_id)
            entry["timestamp"].append(row.timestamp.isoformat() if row.timestamp else "")

        return sorted(grouped.values(), key=lambda x: x["count"], reverse=True)
    except ValueError:
        raise HTTPException(status_code=422, detail="Dates must be YYYY-MM-DD")
