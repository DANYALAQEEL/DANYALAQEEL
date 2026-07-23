from database.cruds.cam_type import get_cam_types
from database.cruds.camera import get_cameras
from database.cruds.number_plate_timestamp import create_number_plate_timestamp
from database.cruds.timestamp import create_timestamp, check_if_card_entered_in_last
from database.cruds.cnic import check_if_cnic_exists, update_cnic, create_cnic
from database.utils.database import get_db

from database.schemas.cnic import CnicCreate
from database.schemas.number_plate_timestamp import NumberPlateTimestampCreate
from database.schemas.timestamp import TimestampCreate
from decouple import config

import datetime

from helpers import save_cnic_image, save_plate_image

# get card repeated threshold from .env file
card_repeated_threshold_minutes = int(config("CARD_REPEATED_THRESHOLD_SECONDS"))


async def get_db_config():

    """
    Get database configuration from database
    """

    db = await anext(get_db())

    config = {}

    cameras = get_cameras(db)
    types = get_cam_types(db)

    db_cameras = []

    for camera in cameras:
        for cam_type in types:
            if camera.type == cam_type.type:
                db_cameras.append(
                    {
                        "id": camera.id,
                        "name": camera.name,
                        "type": cam_type.type,
                        "cam_url": camera.cam_url,
                        "crop": camera.crop,
                    }
                )

    config["cameras"] = db_cameras

    return config


# adds data to postgreSQL database
async def add_cnic_to_database(
    name,
    n_confidence,
    cnic,
    c_confidence,
    all_info,
    timestamp: datetime.datetime.now,
    camera_id,
    save_image=None,
):
    
    
    """
    Add cnic data to database
    """

    db = await anext(get_db())

    name = "Unknown" if name is None else name
    n_confidence = n_confidence if name != "Unknown" else 0
    print(str(all_info))

    if c_confidence < 0.9:
        print("CNIC Confidence level is below threshold")
        return False

    if cnic is None:
        print("CNIC not found")
        return False

    db_cnic = check_if_cnic_exists(db, cnic)

    if check_if_card_entered_in_last(db, card_repeated_threshold_minutes, cnic):
        print(
            f"Card already entered in last {card_repeated_threshold_minutes} minutes: {cnic}"
        )
        return False

    if db_cnic is not None:
        print(f"Cnic already exists in database: {cnic}")

        name_confidence_database = db_cnic.name_confidence

        if n_confidence > name_confidence_database:
            print("name confidence level is higher than the one in database")
            print(f"Updating name for cnic: {cnic}")
            cnic_img_path = f"cnics/{cnic}.jpg"

            new_cnic = CnicCreate(
                cnic=cnic,
                name=name,
                name_confidence=n_confidence,
                all_details=str(all_info),
                cnic_img_path=cnic_img_path,
            )

            update_cnic(db, new_cnic)

            print("Name updated successfully")
    else:
        print(f"Cnic does not exist in database: {cnic}")
        cnic_img_path = f"cnics/{cnic}.jpg"

        new_cnic = CnicCreate(
            cnic=cnic,
            name=name,
            name_confidence=n_confidence,
            all_details=str(all_info),
            cnic_img_path=cnic_img_path,
        )

        create_cnic(db, new_cnic)

        print("Cnic added successfully")

    # convert timestamp to datetime object
    #   Input should be a valid number [type=float_type, input_value=datetime.datetime(2024, 8, 5, 14, 54, 16, 531276), input_type=datetime]

    timestamp = TimestampCreate(cnic=cnic, timestamp=timestamp, cam_id=camera_id)

    new_timestamp = create_timestamp(db, timestamp)

    if cnic is not None and save_image is not None:
        save_cnic_image(save_image, cnic + ".jpg")

    print(
        f"Data added to database: {new_timestamp.cnic}, {new_timestamp.timestamp}, {new_timestamp.cam_id}"
    )

    return True


async def add_number_plate_to_database(
    number_plate,
    number_plate_confidence,
    timestamp: datetime.datetime.now,
    camera_id,
    save_image=None,
):
    
    """
    Add number plate data to database
    """

    db = await anext(get_db())

    if number_plate is None:
        print("Number plate not found")
        return False

    if number_plate_confidence < 0.7:
        print("Number plate confidence level is below threshold")
        return False

    timestamp = NumberPlateTimestampCreate(
        number_plate=number_plate,
        plate_confidence=number_plate_confidence,
        timestamp=timestamp,
        img_path=f"number_plates/{number_plate}.jpg",
        cam_id=camera_id,
    )

    new_timestamp = create_number_plate_timestamp(db, timestamp)

    if number_plate is not None and save_image is not None:
        save_plate_image(save_image, number_plate + ".jpg")

    print(
        f"Data added to database: {new_timestamp.number_plate}, {new_timestamp.timestamp}, {new_timestamp.cam_id}"
    )

    return True
