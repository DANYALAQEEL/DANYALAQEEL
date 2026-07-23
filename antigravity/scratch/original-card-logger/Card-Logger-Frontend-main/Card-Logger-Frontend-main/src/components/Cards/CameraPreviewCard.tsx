import axios from "axios";
import Link from "next/link";
import React, { ReactNode } from "react";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";
import Swal from "sweetalert2";

interface CameraPreviewCardProps {
    id: number;
    name: string;
    type: string;
    url: string;
    location: string;
    children: ReactNode;
    fetchCameras: () => void;
}

const CameraPreviewCard: React.FC<CameraPreviewCardProps> = ({
    id,
    name,
    type,
    url,
    location,
    children,
    fetchCameras,
}) => {

  const handleDelete = async () => {
    try {

      // ask for confirmation
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      });

      if (!result.isConfirmed) {
        return;
      }

      // confirm Again
      const result2 = await Swal.fire({
        title: "Are you really sure?",
        text: "This action is irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, I am Sure!",
        cancelButtonText: "No, keep it",
      });

      if (!result2.isConfirmed) {
        return;
      }

      const response = await axios.delete("/api/camera/delete/" + id);
      Swal.fire("Success", "Camera deleted successfully", "success");
      console.log("Camera deleted successfully:", await response.data);
      fetchCameras();
    } catch (error) {
      console.error("Error deleting camera:", error);
      Swal.fire("Error", "Error deleting camera", "error");
    }
  };

    return (
      <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex grid-cols-2 justify-start gap-4 ">
          <div className="col-span-1 flex items-center justify-center bg-meta-2 dark:bg-meta-4">
            {children}
          </div>

          <div className="col-span-1 mt-4 flex items-end overflow-hidden">
            <div className="self-start">
              <h4 className="text-wrap text-title-md font-bold">{name}</h4>
              <span className="text-wrap font-bold">{location}</span>
            </div>
          </div>
        </div>
        <div className="flex-start -mb-4 mt-4 flex grid-cols-3 gap-4">
          <div className="col-span-1">
            <Link
              href={{
                pathname: "/cameras/view",
                query: {
                  cameraID: id,
                  cameraType: type,
                  cameraName: name,
                },
              }}
              className="mr-4 gap-4"
              title="Open"
            >
              <FaEye />
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href={{
                pathname: "/cameras/edit",
                query: {
                  cameraID: id,
                  camerURL: url,
                },
              }}
              className="mr-4 gap-4"
              title="Open"
            >
              <FaEdit />
            </Link>
          </div>
          <div className="col-span-1">
            <button
              title="Delete"
              onClick={handleDelete}
              >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    );
};

export default CameraPreviewCard;
