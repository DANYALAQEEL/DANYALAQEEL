import { getAPIURL } from "@/libs/api";
import React, { ReactNode } from "react";
import Image from "next/image";

interface RFIDCardDataStatsProps {
  title: string;
  id: string;
  name: string;
  timestamp: string;
  imagePath: string;
  allDetails: string;
  border: boolean;
  details: boolean;
}

const RFIDCardDataStats: React.FC<RFIDCardDataStatsProps> = ({
  title = "",
  id,
  name,
  timestamp,
  imagePath,
  allDetails,
  border = true,
  details = true,
}) => {
  const classNameString = border
    ? "rounded-sm border border-stroke bg-white px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark h-full"
    : "border-white bg-white dark:border-boxdark dark:bg-boxdark rounded-sm border px-7.5 shadow-default h-full";

  console.log(imagePath);
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
            "/api/id-card-camera/np-timestamp-latest-image/" +
            imagePath.split("/")[1]
          }
          alt="CNIC Card"
          className="mb-4 h-auto columns-1 object-cover"
        />

        {details && (
          <div className="mb-6 grid">
            <h4 className="text-nowrap text-title-md font-bold">{name}</h4>

            <p className="text-body-sm text-gray-500">
              {new Date(timestamp).toLocaleString()}
            </p>

            <p className="text-body-sm text-gray-500">{allDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RFIDCardDataStats;
