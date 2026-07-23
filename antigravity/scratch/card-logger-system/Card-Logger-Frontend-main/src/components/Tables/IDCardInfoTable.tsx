import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window"; // Import List from react-window
import CNICCardDataStats from "../Cards/CNICCardDataStats";
import Swal from "sweetalert2";
import { createRoot } from "react-dom/client";
import { getAPIURL } from "@/libs/api";

type Package = {
  id: string;
  name: string;
  timestamp: string;
  imagePath: string;
  allDetails: string;
  isGuest: boolean;
};

type IDCardInfoTableProps = {
  cardData: Package[];
};

const IDCardInfoTable: React.FC<IDCardInfoTableProps> = ({ cardData }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Package;
    direction: "ascending" | "descending";
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [idSearchTerm, setIdSearchTerm] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Debug log for cardData
  console.log("[IDCardInfoTable] cardData:", cardData);
  cardData.forEach((card, idx) => {
    console.log(
      `[IDCardInfoTable] card #${idx} id: ${card.id}, isGuest:`,
      card.isGuest,
    );
  });

  // Function for handling the sorting
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

  // Sorting logic
  const sortedData = React.useMemo(() => {
    let sortableItems = [...cardData];
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
  }, [cardData, sortConfig]);

  // Filter function for searching and applying time range filter
  const filteredData = sortedData.filter((card) => {
    const isNameMatch = card.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isIdMatch = card.id
      .toLowerCase()
      .includes(idSearchTerm.toLowerCase());
    const isStartTimeMatch = startTime
      ? new Date(card.timestamp) >= new Date(startTime)
      : true;
    const isEndTimeMatch = endTime
      ? new Date(card.timestamp) <= new Date(endTime)
      : true;
    return isNameMatch && isIdMatch && isStartTimeMatch && isEndTimeMatch;
  });

  const handleShowAlert = (row: Package) => {
    const modalComponent = document.createElement("div");
    const root = createRoot(modalComponent);

    root.render(
      <CNICCardDataStats
        title=""
        id={row.id}
        name={row.name}
        timestamp={row.timestamp}
        imagePath={row.imagePath}
        allDetails={row.allDetails}
        isGuest={row.isGuest}
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
        popup:
          "rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark h-full dark:text-white w-full max-w-[800px]",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleDownloadImage(row.id);
      }
    });
  };

  const handleDownloadImage = async (id: string) => {
    const response = await fetch(
      getAPIURL() + "/api/id-card-camera/cnic-timestamp-latest-image/" + id,
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

  // Render the rows for the virtualized table
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const card = filteredData[index];

    return (
      <tr
        style={style}
        className="border-b border-stroke dark:border-strokedark"
      >
        {/* Index Column */}
        <td className="px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
          {index + 1}
        </td>

        {/* Card ID Column */}
        <td className="px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">{card.id}</h5>
        </td>

        {/* Name Column */}
        <td className="px-4 py-5 dark:text-white">{card.name}</td>

        {/* Timestamp Column */}
        <td className="px-4 py-5 dark:text-white">
          {new Date(card.timestamp).toLocaleString()}
        </td>

        {/* Actions Column */}
        <td className="px-4 py-5 dark:border-strokedark">
          <div className="flex space-x-4">
            <button
              onClick={() => handleShowAlert(card)}
              className="text-primary hover:text-primary"
            >
              Show Details
            </button>
            <button
              onClick={() => handleDownloadImage(card.id)}
              className="ml-3 text-primary hover:text-primary"
            >
              Download
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h1 className="mb-8 text-4xl font-bold dark:text-white">
        ID Card Data Table
      </h1>

      <div className="bg-cyan-100 px-5 py-2 transition-all dark:bg-slate-700 dark:text-white">
        <div className="mb-4 grid grid-cols-4 grid-rows-1 gap-2">
          <div className="flex flex-col">
            <label htmlFor="nameSearch" className="mb-1 "></label>
            <input
              id="nameSearch"
              type="text"
              placeholder="Search by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="idSearch" className="mb-1"></label>
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
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="endTime" className="mb-1"></label>
            <input
              id="endTime"
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Table Headings */}
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[50px] bg-sky-100 px-4 py-4 font-medium text-black transition-all dark:bg-slate-400 dark:text-white">
              S.No.
            </th>
            <th className="min-w-[150px] bg-sky-200 px-4 py-4 font-medium text-black transition-all dark:bg-slate-500 dark:text-white">
              Card ID
            </th>
            <th className="min-w-[150px] bg-sky-100 px-4 py-4 font-medium text-black transition-all dark:bg-slate-400 dark:text-white">
              Name
            </th>
            <th className="min-w-[150px] bg-sky-200 px-4 py-4 font-medium text-black transition-all dark:bg-slate-500 dark:text-white">
              Timestamp
            </th>
            <th className="bg-sky-100 px-4 py-4 font-medium text-black transition-all dark:bg-slate-400 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>
      </table>
      {/* Virtualized Rows */}
      <List
        height={600} // Height of the virtualized table (adjust as needed)
        itemCount={filteredData.length}
        itemSize={60} // Height of each row (adjust as needed)
        width={1000} // Width of the table
      >
        {Row}
      </List>
    </div>
  );
};

export default IDCardInfoTable;
