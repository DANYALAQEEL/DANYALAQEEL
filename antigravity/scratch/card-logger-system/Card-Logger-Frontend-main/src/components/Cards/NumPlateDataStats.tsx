import { getAPIURL } from "@/libs/api";
import React, { ReactNode } from "react";
import Image from "next/image";

interface NumPlateDataStatsProps {
    title: string;
    id: number;
    name: string;
    timestamp: string;
    imagePath: string;
    allDetails: string;
    border: boolean
    details: boolean
}

const NumPlateDataStats: React.FC<NumPlateDataStatsProps> = ({
    title = "",
    id,
    name,
    timestamp,
    imagePath,
    allDetails,
    border = true,
    details = true
}) => {

    const classNameString = border ? "rounded-sm border border-stroke bg-white px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark h-full" : "border-white bg-white dark:border-boxdark dark:bg-boxdark rounded-sm border px-7.5 shadow-default h-full";

    return (
        <div className={classNameString}>
            <div className="mt-4 flex flex-col space-x-4 py-1">
                <div className="grid mb-6">
                    <h4 className="text-title-md font-bold text-nowrap">
                        <div>
                            {details ? (title) : "Latest Number Plate"}
                        </div>
                        {id}
                    </h4>
                </div>
                <img
                    src={getAPIURL() + "/api/number-plate/image/" + imagePath}
                    alt="Number Plate"
                    className="columns-1 h-auto mb-4 object-cover"
                />

                {details && (
                    <div className="grid mb-6">
                        <h4 className="text-title-md font-bold text-nowrap">
                            {name}
                        </h4>

                        <p className="text-body-sm text-gray-500">
                            { new Date(timestamp).toLocaleString() }
                        </p>

                        <p className="text-body-sm text-gray-500">
                            {allDetails}
                        </p>
                    </div>
                )}

            </div>
        </div>

    );
};

export default NumPlateDataStats;
