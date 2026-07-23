"use client";
import React, { FormEvent, useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { getAPIURL } from "@/libs/api";
import CanvasImage from "./CanvasImage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CameraEditForm: React.FC<{ 
  id: number
  url: string
 }> = ({ id, url }) => {

  const router = useRouter();
  const cam_url = url;

  // Determine if it is a local webcam or network camera
  const isLocal = !cam_url.includes("://");

  let selectedProtocol = "";
  let selectedUsername = "";
  let selectedPassword = "";
  let selectedIP = "";
  let deviceIndex = 0;

  if (isLocal) {
    deviceIndex = parseInt(cam_url, 10) || 0;
  } else {
    try {
      const urlParts = cam_url.split("://");
      selectedProtocol = urlParts[0];
      const urlParts2 = urlParts[1].split(":");
      selectedUsername = urlParts2[0];
      const urlParts3 = urlParts2[1].split("@");
      selectedPassword = urlParts3[0];
      selectedIP = urlParts3.slice(1).join("@").split("/")[0];
    } catch (e) {
      console.error("Error parsing camera URL:", e);
    }
  }

  const [thumbnail, setThumbnail] = useState<string>("");
  const [thumbnailReload, setThumbnailReload] = useState<boolean>(false);
  const [rectangleCoordinates, setRectangleCoordinates] = useState<any>({});
  const [cameraResolution, setCameraResolution] = useState<{
    width: number;
    height: number;
  }>({
    width: 1920,
    height: 1080,
  });
  const [gotThumbnail, setGotThumbnail] = useState<boolean>(false);
  const [gotCoordinates, setGotCoordinates] = useState<boolean>(false);

  // function to get the thumbnail
  const getThumbnail = () => {
    const apiUrl = getAPIURL();
    let requestURL = "";

    if (isLocal) {
      requestURL = `${apiUrl}/api/camera/temp-thumbnail?source_type=local&device_index=${deviceIndex}`;
    } else {
      requestURL = `${apiUrl}/api/camera/temp-thumbnail?source_type=network&protocol=${selectedProtocol}&ip=${selectedIP}&username=${selectedUsername}&password=${selectedPassword}`;
    }

    setThumbnail(requestURL);
    setThumbnailReload(!thumbnailReload);
    getCameraResolution();
  };

  const calculateCropValues = (
    startPoint: { x: number; y: number },
    endPoint: { x: number; y: number },
    canvasSize: { width: number; height: number },
    originalImageSize: { width: any; height: any },
  ) => {
    const widthScale = originalImageSize.width / canvasSize.width;
    const heightScale = originalImageSize.height / canvasSize.height;

    let originalStartX = startPoint.x * widthScale;
    let originalStartY = startPoint.y * heightScale;
    let originalEndX = endPoint.x * widthScale;
    let originalEndY = endPoint.y * heightScale;

    // proccess values
    if (originalEndX < originalStartX) {
      const temp = originalEndX;
      originalEndX = originalStartX;
      originalStartX = temp;
    }
    if (originalEndY < originalStartY) {
      const temp = originalEndY;
      originalEndY = originalStartY;
      originalStartY = temp;
    }

    return {
      startX: originalStartX,
      startY: originalStartY,
      width: originalEndX - originalStartX,
      height: originalEndY - originalStartY,
    };
  };

  const getRectangleCoordinates = (coordinates: any) => {
    const cameraWidth = cameraResolution.width;
    const cameraHeight = cameraResolution.height;
    const cropValues = calculateCropValues(
      coordinates.startPoint,
      coordinates.endPoint,
      coordinates.canvasSize,
      { width: cameraWidth, height: cameraHeight },
    );

    console.log(
      cameraHeight,
      cameraWidth,
      coordinates.canvasSize,
      coordinates.startPoint,
      coordinates.endPoint,
    );

    setRectangleCoordinates(cropValues);
    console.log(cropValues);
    setGotThumbnail(true);
    setGotCoordinates(true);
  };

  const getCameraResolution = async () => {
    try {
      let requestURL = "";
      if (isLocal) {
        requestURL = `/api/camera/resolution?source_type=local&device_index=${deviceIndex}`;
      } else {
        requestURL = `/api/camera/resolution?source_type=network&protocol=${selectedProtocol}&ip=${selectedIP}&username=${selectedUsername}&password=${selectedPassword}`;
      }
      const response = await axios.get(requestURL);
      setCameraResolution(response.data.data);
    } catch (error) {
      console.error("Error fetching camera resolutions:", error);
    }
  };

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cameraName = (e.target as unknown as HTMLInputElement[])[0].value;

    if (gotThumbnail && gotCoordinates) {
      const cameraData: any = {
        id: id,
        name: cameraName,
        source_type: isLocal ? "local" : "network",
        cropValues: rectangleCoordinates,
      };

      if (isLocal) {
        cameraData.device_index = deviceIndex;
      } else {
        cameraData.protocol = selectedProtocol;
        cameraData.ip = selectedIP;
        cameraData.username = selectedUsername;
        cameraData.password = selectedPassword;
      }

      const response = axios.put(`/api/camera/update/${id}`, cameraData);

      const data = (await response).data;

      if (data.status) {
        toast.success(data.msg);
        setTimeout(() => {
          router.push("/cameras/all");
        }, 2000);
      } else {
        toast.error(data.msg);
      }
    } else {
      toast.error("Please get the thumbnail first");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-9">
        {/* Camera Edit Form */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Edit Camera
            </h3>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Camera Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter camera name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Thumbnail
                </label>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label
                      htmlFor="thumbnail"
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                    >
                      <CanvasImage
                        response={thumbnail}
                        reload={thumbnailReload}
                        onRectangleDrawn={getRectangleCoordinates}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  className="flex w-full justify-center rounded bg-cyan-600 p-3 font-medium text-gray hover:bg-opacity-90"
                  type="button"
                  onClick={getThumbnail}
                >
                  Get Thumbnail
                </button>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Update Camera
                </button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default CameraEditForm;
