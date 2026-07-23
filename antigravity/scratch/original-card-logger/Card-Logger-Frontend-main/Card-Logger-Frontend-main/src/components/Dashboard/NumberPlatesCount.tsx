"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../common/Loader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, subDays } from "date-fns";

const NumberPlatesCount: React.FC = () => {
  type NumberPlatesData = {
    number_plate: string;
    count: number;
    cam_id: number[];
    timestamp: string[];
  };

  const [expandedPlates, setExpandedPlates] = useState<{
    [key: number]: boolean;
  }>({});

  const [numberPlatesData, setNumberPlatesData] = useState<NumberPlatesData[]>(
    [],
  );
  const [totalNumberPlates, setTotalNumberPlates] = useState("0");
  const [isLoadingNumberPlates, setIsLoadingNumberPlates] = useState(true);
  const [dateRange, setDateRange] = useState({
    start_date: format(new Date(), "yyyy-MM-dd"),
    end_date: format(new Date(), "yyyy-MM-dd"),
  });
  const [cameraNames, setCameraNames] = useState<{ [key: number]: string }>({});

  const fetchCameraNames = async () => {
    try {
      const response = await axios.get("/api/camera/get-camera-names");
      const cameras = response.data;

      // Convert to a lookup object for easier access
      const cameraLookup: { [key: number]: string } = {};
      cameras.forEach((camera: { cam_id: number; cam_name: string }) => {
        cameraLookup[camera.cam_id] = camera.cam_name;
      });

      setCameraNames(cameraLookup);
    } catch (error) {
      console.error("Error fetching camera names:", error);
    }
  };

  const fetchNumberPlatesData = async () => {
    try {
      // Get the response from your API
      const response = await axios.get<NumberPlatesData[]>(
        `/api/number-plate/number-plates-count?start_date=${dateRange.start_date}&end_date=${dateRange.end_date}`,
      );

      // Make sure you're setting the data correctly based on API structure
      const data = response.data; // or response.data.data if there's another data wrapper
      setNumberPlatesData(data);

      // Calculate total number plates
      const total = data.reduce(
        (sum: number, item: NumberPlatesData) => sum + item.count,
        0,
      );
      setTotalNumberPlates(total.toString());
    } catch (error) {
      console.error("Error fetching data:", error);
      // Set empty array to avoid errors
      setNumberPlatesData([]);
    } finally {
      setIsLoadingNumberPlates(false);
    }
  };

  useEffect(() => {
    setIsLoadingNumberPlates(true);
    fetchNumberPlatesData();
    fetchCameraNames();
  }, [dateRange]);

  // For debugging
  useEffect(() => {
    console.log("Current data:", numberPlatesData);
  }, [numberPlatesData]);

  const handleTodayClick = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    setDateRange({
      start_date: today,
      end_date: today,
    });
  };

  const handleThisWeekClick = () => {
    setDateRange({
      start_date: format(subDays(new Date(), 6), "yyyy-MM-dd"),
      end_date: format(new Date(), "yyyy-MM-dd"),
    });
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold dark:text-white">
          Number Plates Analysis
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleTodayClick}
            className={`rounded px-4 py-2 text-sm font-medium ${
              dateRange.start_date === dateRange.end_date &&
              dateRange.end_date === format(new Date(), "yyyy-MM-dd")
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            Today
          </button>
          <button
            onClick={handleThisWeekClick}
            className={`rounded px-4 py-2 text-sm font-medium ${
              dateRange.start_date ===
              format(subDays(new Date(), 6), "yyyy-MM-dd")
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            This Week
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {isLoadingNumberPlates ? (
          <Loader />
        ) : (
          <CardDataStats
            title="Total Occurrences"
            total={totalNumberPlates}
            haveRate={false}
          >
            <Image
              src={"/images/icon/license-plate.svg"}
              width={50}
              height={50}
              alt="Number Plates"
            />
          </CardDataStats>
        )}

        {isLoadingNumberPlates ? (
          <Loader />
        ) : (
          <CardDataStats
            title="Unique Plates"
            total={numberPlatesData.length.toString()}
            haveRate={false}
          >
            <Image
              src={"/images/icon/unique-plate.svg"}
              width={50}
              height={50}
              alt="Unique Plates"
            />
          </CardDataStats>
        )}

        {/* Number Plates Table */}
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Number Plates Frequency
            </h4>

            {isLoadingNumberPlates ? (
              <Loader />
            ) : numberPlatesData.length > 0 ? (
              <div className="max-h-96 overflow-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                      <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                        Number Plate
                      </th>
                      <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                        Count
                      </th>
                      <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {numberPlatesData.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <h5 className="font-medium text-black dark:text-white">
                              {item.number_plate}
                            </h5>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                              {item.count}
                            </span>
                          </td>
                          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                            <button
                              onClick={() => {
                                setExpandedPlates((prev) => ({
                                  ...prev,
                                  [index]: !prev[index],
                                }));
                              }}
                              className="flex items-center gap-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                            >
                              {expandedPlates[index] ? "Hide" : "Show"} Details
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform ${expandedPlates[index] ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                        {expandedPlates[index] && (
                          <tr>
                            <td
                              colSpan={3}
                              className="bg-gray-50 px-4 py-4 dark:bg-meta-4"
                            >
                              <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                  <thead>
                                    <tr>
                                      <th className="border-b px-2 py-2 text-left font-medium">
                                        No.
                                      </th>
                                      <th className="border-b px-2 py-2 text-left font-medium">
                                        Timestamp
                                      </th>
                                      <th className="border-b px-2 py-2 text-left font-medium">
                                        Camera ID
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {item.timestamp
                                      .map((time, idx) => ({ time, idx }))
                                      .sort(
                                        (a, b) =>
                                          new Date(b.time).getTime() -
                                          new Date(a.time).getTime(),
                                      )
                                      .map((entry, sortedIdx) => (
                                        <tr
                                          key={entry.idx}
                                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                          <td className="border-b px-2 py-2">
                                            {sortedIdx + 1}
                                          </td>
                                          <td className="border-b px-2 py-2">
                                            {new Date(
                                              entry.time,
                                            ).toLocaleString()}
                                          </td>
                                          <td className="border-b px-2 py-2">
                                            {cameraNames[
                                              item.cam_id[entry.idx]
                                            ] ||
                                              `Camera ID: ${item.cam_id[entry.idx]}`}
                                          </td>
                                        </tr>
                                      ))}
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center">
                No number plate data available
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberPlatesCount;
