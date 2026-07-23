import os
from fastapi import APIRouter, Depends, HTTPException, Request, WebSocket

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
async def add_vips_batch(cnics: List[CnicCreate], db: Session = Depends(get_db)):
    try:
        results = []
        for cnic_data in cnics:
            try:
                vip = get_vip(cnic_data.cnic, db)
                if vip:
                    vip.is_vip = True
                    # vip.name = cnic_data.name  # Update name if provided
                else:
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
    else:
        raise HTTPException(status_code=404, detail="Image not found")