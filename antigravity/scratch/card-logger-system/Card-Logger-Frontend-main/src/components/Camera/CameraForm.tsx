"use client";
import React, { FormEvent, useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { getAPIURL } from "@/libs/api";
import Image from "next/image";
import CanvasImage from "./CanvasImage";
import { get } from "http";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CameraForm: React.FC = () => {
  const [thumbnail, setThumbnail] = useState<string>("");
  const [thumbnailReload, setThumbnailReload] = useState<boolean>(false);
  const [rectangleCoordinates, setRectangleCoordinates] = useState<any>({});
  const [cameraTypes, setCameraTypes] = useState<any[]>([]);
  const [locations, setLocations] = useState<{
    id: number;
    coords: string;
    description: string;
  }[]>([]);
  const [cameraResolution, setCameraResolution] = useState<{
    width: number;
    height: number;
  }>({
    width: 1920,
    height: 1080,
  });
  const [gotThumbnail, setGotThumbnail] = useState<boolean>(false);
  const [gotCoordinates, setGotCoordinates] = useState<boolean>(false);
  const [sourceType, setSourceType] = useState<"network" | "local">("network");
  const [deviceIndex, setDeviceIndex] = useState<number>(0);

  // function to get the thumbnail
  const getThumbnail = () => {
    const apiUrl = getAPIURL();
    let requestURL = "";

    if (sourceType === "local") {
      requestURL = `${apiUrl}/api/camera/temp-thumbnail?source_type=local&device_index=${deviceIndex}`;
    } else {
      const protocol = document.getElementById("protocol") as HTMLSelectElement;
      const ip = document.getElementById("ip") as HTMLInputElement;
      const username = document.getElementById("username") as HTMLInputElement;
      const password = document.getElementById("password") as HTMLInputElement;

      requestURL = `${apiUrl}/api/camera/temp-thumbnail?source_type=network&protocol=${protocol.value}&ip=${ip.value}&username=${username.value}&password=${password.value}`;
    }

    setThumbnail(requestURL);
    setThumbnailReload(!thumbnailReload);
    getCameraResolution();
  };

  const calculateCropValues = (
    startPoint: { x: number; y: number; },
    endPoint: { x: number; y: number; },
    canvasSize: { width: number; height: number; },
    originalImageSize: { width: any; height: any; },
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
    console.log("New Values", cropValues);
    setGotThumbnail(true);
    setGotCoordinates(true);
  };

  const getCameraTypes = async () => {
    try {
      const response = await axios.get(`${getAPIURL()}/api/camera/types`);
      setCameraTypes(response.data.data || []);
    } catch (error) {
      console.error("Error fetching camera types:", error);
      setCameraTypes([]);
    }
  };

  const getLocations = async () => {
    try {
      const response = await axios.get(`/api/camera/locations`);
      setLocations(response.data.data || []);
    } catch (error) {
      console.error("Error fetching camera locations:", error);
      setLocations([]);
    }
  };

  const getCameraResolution = async () => {
    try {
      let requestURL = "";
      if (sourceType === "local") {
        requestURL = `/api/camera/resolution?source_type=local&device_index=${deviceIndex}`;
      } else {
        const protocol = document.getElementById("protocol") as HTMLSelectElement;
        const ip = document.getElementById("ip") as HTMLInputElement;
        const username = document.getElementById("username") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;
        requestURL = `/api/camera/resolution?source_type=network&protocol=${protocol.value}&ip=${ip.value}&username=${username.value}&password=${password.value}`;
      }

      const response = await axios.get(requestURL);
      setCameraResolution({
        width: response.data.data.width,
        height: response.data.data.height,
      });
    } catch (error) {
      console.error("Error fetching camera resolutions:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget as HTMLFormElement;

    const cameraName = (formElement[0] as HTMLInputElement).value;
    const cameraType = (formElement[1] as HTMLInputElement).value;
    const location_id = (formElement[2] as HTMLInputElement).value;

    if (gotThumbnail && gotCoordinates) {
      const cameraData: any = {
        name: cameraName,
        type: cameraType,
        source_type: sourceType,
        cropValues: rectangleCoordinates,
        location_id: location_id,
      };

      if (sourceType === "local") {
        cameraData.device_index = deviceIndex;
      } else {
        const protocolEl = document.getElementById("protocol") as HTMLSelectElement;
        const ipEl = document.getElementById("ip") as HTMLInputElement;
        const usernameEl = document.getElementById("username") as HTMLInputElement;
        const passwordEl = document.getElementById("password") as HTMLInputElement;

        cameraData.protocol = protocolEl.value;
        cameraData.ip = ipEl.value;
        cameraData.username = usernameEl.value;
        cameraData.password = passwordEl.value;
      }

      try {
        const response = await axios.post(`/api/camera/save`, cameraData);
        const data = response.data;

        if (data.status) {
          toast.success(data.msg);
          formElement.reset();
          handleReset();
        } else {
          toast.error(data.msg);
        }
      } catch (err: any) {
        toast.error("Failed to save camera settings");
        console.error(err);
      }
    } else {
      toast.error("Please get the thumbnail first");
    }
  };

  const handleReset = () => {
    setThumbnail("");
    setThumbnailReload(false);
    setRectangleCoordinates({});
    setCameraResolution({
      width: 1920,
      height: 1080,
    });
    setGotThumbnail(false);
    setGotCoordinates(false);
    setSourceType("network");
    setDeviceIndex(0);
  };
  
  useEffect(() => {
    getCameraTypes();
    getLocations();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-9">
        {/* Camera Add Form */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add Camera
            </h3>
          </div>
          <form onSubmit={
            handleSubmit}>
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

                {
                  //dropdown for selecting camera type
                }
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Camera Type
                  </label>
                  <select
                    required
                    title="Select camera type"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="" disabled selected>
                      Select camera type
                    </option>
                    {(cameraTypes || []).map((cameraType, index) => {
                      return (
                        <option key={index} value={cameraType.type}>
                          {cameraType.type}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full mb-4">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Location
                  </label>
                  <select
                    required
                    title="Select location"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="" disabled selected>
                      Select location
                    </option>
                    {(locations || []).map((location, index) => {
                      return (
                        <option key={index} value={location.id}>
                          {location.description}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Camera Source
                </label>
                <select
                  title="Select camera source type"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value as "network" | "local")}
                >
                  <option value="network">Network Camera (RTSP/HTTP)</option>
                  <option value="local">Laptop / USB Webcam</option>
                </select>
              </div>

              {sourceType === "network" && (
                <>
                  <div className="mb-4.5">
                    <div className="flex gap-4">
                      <div>
                        <label
                          htmlFor="protocol"
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                        >
                          Protocol:
                        </label>
                        <select
                          id="protocol"
                          name="protocol"
                          className="w-max rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        >
                          <option value="http">HTTP</option>
                          <option value="rtsp">RTSP</option>
                        </select>
                      </div>

                      <div className="w-full">
                        <label
                          htmlFor="ip"
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                        >
                          IP Address:
                        </label>
                        <input
                          type="text"
                          id="ip"
                          name="ip"
                          placeholder="Enter IP address"
                          required
                          pattern="\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <div className="flex gap-4">
                      <div className="w-full">
                        <label
                          htmlFor="username"
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                        >
                          Username:
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter username"
                          required
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-full">
                        <label
                          htmlFor="password"
                          className="mb-3 block text-sm font-medium text-black dark:text-white"
                        >
                          Password:
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter password"
                          required
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {sourceType === "local" && (
                <div className="mb-4.5">
                  <label
                    htmlFor="deviceIndex"
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                  >
                    Webcam Device Index
                  </label>
                  <input
                    type="number"
                    id="deviceIndex"
                    min={0}
                    value={deviceIndex}
                    onChange={(e) => setDeviceIndex(Number(e.target.value))}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  <p className="mt-2 text-sm text-body">
                    0 is usually the built-in laptop camera. If you have an external USB webcam
                    plugged in, try 1. Click "Get Thumbnail" below to test — if the preview
                    image is wrong or blank, try the next number.
                  </p>
                </div>
              )}

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
                  Add Camera
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

export default CameraForm;
