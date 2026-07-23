console.log("[CNICCardDataStats] file loaded");
import { getAPIURL } from "@/libs/api";
import React, { ReactNode } from "react";
import Image from "next/image";

interface CNICCardDataStatsProps {
  title: string;
  id: string;
  name: string;
  timestamp: string;
  imagePath: string;
  allDetails: string;
  isGuest: boolean;
  border: boolean;
  details: boolean;
}

const CNICCardDataStats: React.FC<CNICCardDataStatsProps> = ({
  title = "",
  id,
  name,
  timestamp,
  imagePath,
  allDetails,
  isGuest,
  border = true,
  details = true,
}) => {
  // Debug log for all props
  console.log("[CNICCardDataStats] props:", {
    title,
    id,
    name,
    timestamp,
    imagePath,
    allDetails,
    isGuest,
    border,
    details,
  });

  const classNameString = border
    ? "rounded-sm border border-stroke bg-white px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark h-full"
    : "border-white bg-white dark:border-boxdark dark:bg-boxdark rounded-sm border px-7.5 shadow-default h-full";

  return (
    <div className={classNameString}>
      <div className="mt-4 flex flex-col space-x-4 py-1">
        <div className="mb-6 grid">
          <h4 className="text-nowrap text-title-md font-bold">
            <div>{details ? title : ""}</div>
            {id}
          </h4>
        </div>
        <img
          src={
            getAPIURL() +
            "/api/id-card-camera/cnic-timestamp-latest-image/" +
            id
          }
          alt="CNIC Card"
          className="mb-4 h-auto columns-1 object-cover"
        />

        {details && (
          <div className="mb-6 grid">
            <h4 className="flex flex-col items-center justify-center gap-2 text-nowrap text-title-md font-bold">
              <span className="flex items-center gap-2">
                Guest:
                <span
                  className={
                    isGuest
                      ? "font-bold text-green-600"
                      : "text-red-600 font-bold"
                  }
                >
                  {isGuest ? "True" : "False"}
                </span>
              </span>
            </h4>
            <h4 className="text-nowrap text-center text-title-md font-bold">
              {name}
            </h4>

            <p className="text-body-sm text-gray-500">
              {new Date(timestamp).toLocaleString()}
            </p>

            <p className="text-body-sm text-gray-500">{allDetails}</p>
          </div>
        )}
        {!details && (
          <div className="mb-2 grid">
            <h4 className="flex flex-col items-center justify-center gap-2 text-nowrap text-title-md font-bold">
              <span className="flex items-center gap-2">
                Guest:
                <span
                  className={
                    isGuest
                      ? "font-bold text-green-600"
                      : "text-red-600 font-bold"
                  }
                >
                  {isGuest ? "True" : "False"}
                </span>
              </span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default CNICCardDataStats;
