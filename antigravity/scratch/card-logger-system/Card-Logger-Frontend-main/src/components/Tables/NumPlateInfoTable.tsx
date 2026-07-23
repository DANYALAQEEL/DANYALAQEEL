"use client";
import Link from "next/link";
import { getAPIURL } from "@/libs/api";
import React, { useEffect, useState } from "react";
import NumPlateDataStats from "../Cards/NumPlateDataStats";
import Swal from "sweetalert2";
import { createRoot } from "react-dom/client";
import { FixedSizeList as List } from "react-window"; // Import List from react-window

type Package = {
  number_plate: number;
  timestamp: string;
  img_path: string;
};

type NumPlateInfoTableProps = {
  numPlate: Package[];
};

const NumPlateInfoTable: React.FC<NumPlateInfoTableProps> = ({ numPlate }) => {
  const [data, setData] = useState(numPlate);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Package;
    direction: "ascending" | "descending";
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [idSearchTerm, setIdSearchTerm] = useState<string>("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showSweetAlert, setShowSweetAlert] = useState(false);
  const [alertData, setAlertData] = useState(null as Package | null);

  useEffect(() => {
    setData(numPlate);
  }, [numPlate]);

  const handleShowAlert = (row: Package) => {
    setAlertData(row);
    setShowSweetAlert(true);

    const modalComponent = document.createElement("div");

    const root = createRoot(modalComponent);

    root.render(
      <NumPlateDataStats
        title="Number Plate Details"
        name="Number Plate"
        allDetails="Number Plate Details"
        id={row.number_plate}
        timestamp={row.timestamp}
        imagePath={`${row.number_plate}`}
        border={false}
        details={true}
      />,
    );

    Swal.fire({
      title: "Card Details",
      html: modalComponent,
      showConfirmButton: true,
      confirmButtonText: "Download Image",
      showCancelButton: true,
      cancelButtonText: "Go Back",
      customClass: {
        popup: "rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark h-full dark:text-white w-full max-w-[800px]",
      }
    }).then((result) => {
      if (!result.isConfirmed) {
        handleConfirmAlert();
      }
      if (result.isConfirmed) {
        handleDownloadImage(`{${row.number_plate}}`);
      }
    });
  };

  const handleConfirmAlert = () => {
    setShowSweetAlert(false);
    setAlertData(null);
  };

  const handleDownloadImage = async (id: string) => {
    console.log(`asdsa${id}`);
    const response = await fetch(
      getAPIURL() + "/api/number-plate/image/" + id,
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = id + ".jpg";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const requestSort = (key: keyof Package) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter((card) => {
    const isIdMatch = card.number_plate.toString().includes(idSearchTerm.toString());
    const isStartTimeMatch = startTime
      ? new Date(card.timestamp) >= new Date(startTime)
      : true;
    const isEndTimeMatch = endTime
      ? new Date(card.timestamp) <= new Date(endTime)
      : true;
    return isIdMatch && isStartTimeMatch && isEndTimeMatch;
  });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  // Virtualized Row
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const card = sortedData[index];
  
    return (
      <tr style={style} className="border-b border-stroke dark:border-strokedark">
        <td className="px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">{index + 1}</td>
        <td className="px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">{card.number_plate}</h5>
        </td>
        <td className="px-4 py-5 dark:text-white">
          {new Date(card.timestamp).toLocaleString()}
        </td>
        <td className="px-4 py-5 dark:border-strokedark">
          <div className="flex items-center space-x-3.5">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleShowAlert(card);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                  fill=""
                />
                <path
                  d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                  fill=""
                />
              </svg>
            </a>
            <button
              onClick={() => handleDownloadImage(card.img_path)}
              title="Download"
            >
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 12.75H6.75V9H4.5L9 4.5L13.5 9H11.25V12.75ZM15.75 15V16.5H2.25V15H0V16.5C0 17.3281 0.671875 18 1.5 18H16.5C17.3281 18 18 17.3281 18 16.5V15H15.75Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h1 className="mb-8 text-4xl font-bold">Num Plate Data Table</h1>
      {/* Search Inputs */}
      <div className="bg-cyan-100 px-5 py-2 transition-all dark:bg-slate-700 dark:text-white">
        <div className="mb-4 grid grid-cols-4 grid-rows-1 gap-2">
          <div className="flex flex-col">
            <label htmlFor="idSearch" className="mb-1 "></label>
            <input
              id="idSearch"
              type="text"
              placeholder="Search by ID"
              value={idSearchTerm}
              onChange={(e) => setIdSearchTerm(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startTime" className="mb-1"></label>
            <input
              id="startTime"
              type="text"
              placeholder="Start Time"
              onFocus={(e) => (e.target.type = "datetime-local")}
              onBlur={(e) => {
                if (e.target.value === "") e.target.type = "text";
              }}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endTime" className="mb-1"></label>
            <input
              id="endTime"
              type="text"
              placeholder="End Time"
              onFocus={(e) => (e.target.type = "datetime-local")}
              onBlur={(e) => {
                if (e.target.value === "") e.target.type = "text";
              }}
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Table Headings */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[50px] bg-sky-100 px-4 py-4 font-medium text-black transition-all dark:bg-slate-400 dark:text-white">S.No.</th>
            <th className="min-w-[150px] bg-sky-200 px-4 py-4 font-medium text-black transition-all dark:bg-slate-500 dark:text-white">Card ID</th>
            <th className="min-w-[150px] bg-sky-200 px-4 py-4 font-medium text-black transition-all dark:bg-slate-500 dark:text-white">Timestamp</th>
            <th className="bg-sky-100 px-4 py-4 font-medium text-black transition-all dark:bg-slate-400 dark:text-white">Actions</th>
          </tr>
        </thead>
      </table>

      {/* Virtualized List */}
      <List
        height={600}
        itemCount={sortedData.length}
        itemSize={60} // Adjust based on row height
        width={1000}
      >
        {Row}
      </List>
    </div>
  );
};

export default NumPlateInfoTable;
