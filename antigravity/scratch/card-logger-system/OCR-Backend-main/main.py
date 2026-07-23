import multiprocessing as mp
import asyncio
from typing import List

from patterns.patterns import run_system
from database_operations import get_db_config


async def main(manager: List = None) -> None:
    """
    Main function to run the system
    
    Be sure to run this function in an async function
    
    Be sure to set the start method of multiprocessing to "spawn" before calling this function
    """

    db_config = await get_db_config()

    cameras = db_config["cameras"]

    frame_queue = mp.Queue()
    ocr_results_queue = mp.Queue()

    previously_saved_cnic = manager.list()
    card_already_in_holder = manager.list()
    number_plate_detect_cache = manager.list()

    run_system(
        cams=cameras,
        frame_queue=frame_queue,
        ocr_results_queue=ocr_results_queue,
        previously_saved_cnic=previously_saved_cnic,
        card_already_in_holder=card_already_in_holder,
        number_plate_detect_cache=number_plate_detect_cache,
    )


if __name__ == "__main__":
    mp.set_start_method("spawn")
    manager = mp.Manager()
    asyncio.run(main(manager=manager))
