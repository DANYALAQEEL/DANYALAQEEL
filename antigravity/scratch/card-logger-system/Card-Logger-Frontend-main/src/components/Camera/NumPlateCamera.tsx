"use client";
import { useState, useEffect } from "react";
import useWebSocket from "@/hooks/useWebSocket";
import CNICCardDataStats from "@/components/Cards/CNICCardDataStats";
import RFIDCardDataStats from "@/components/Cards/RFIDCardDataStats";
import NumPlateDataStats from "../Cards/NumPlateDataStats";
import IDCardInfoTable from "@/components/Tables/IDCardInfoTable";
import RTSPStream from "@/components/Camera/RTSPStream";
import Loader from "@/components/common/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import { createRoot } from "react-dom/client";
import { getAPIURL } from "@/libs/api";
import { time } from "console";
import NumPlateInfoTable from "../Tables/NumPlateInfoTable";

const NumPlateCamera: React.FC<{
  cameraID: number;
  cameraType: string;
  cameraName: string;
}> = ({
  cameraID,
  cameraType,
  cameraName,
}: {
  cameraID: number;
  cameraType: string;
  cameraName: string;
}) => {
  const [cardData, setCardData] = useState([]);
  const [latestNumPlate, setLatestNumPlate] = useState({
    number_plate: "",
    timestamp: "",
    img_path: "",
  });
  const [totalIDCardsToday, setTotalIDCardsToday] = useState({
    total_cards_for_day: "",
    cards_day_difference_percentage: "",
    card_difference_direction: "up",
  });

  const [isLoadingCardData, setIsLoadingCardData] = useState(true);
  const [isLoadinglatestNumPlate, setIsLoadinglatestNumPlate] = useState(true);
  const [isLoadingtotalIDCardsToday, setIsLoadingtotalIDCardsToday] =
    useState(true);

  const handleShowAlert = () => {
    const modalComponent = document.createElement("div");

    const root = createRoot(modalComponent);

    root.render(
      <RFIDCardDataStats
        title="Latest ID Card Details"
        id={""}
        name={""}
        timestamp={""}
        imagePath={latestNumPlate.img_path}
        allDetails={""}
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
        handleDownloadImage(cameraID);
      }
    });
  };

  const handleRefresh = () => {
    setIsLoadingCardData(true);
    setIsLoadinglatestNumPlate(true);
    setIsLoadingtotalIDCardsToday(true);

    fetchData();
    fetchLatestNumPlate();
  };

  const handleDownloadImage = async (id: number) => {
    // console.log('Downloaded');
    const response = await fetch(
      getAPIURL() + "/api/number-plate/image/" + cameraID,
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

  useWebSocket({
    url:
      process.env.NEXT_PUBLIC_WS_NOTIFY_URL! +
      "/api/websockets/num-plate-update",
    onMessage: (message) => {
      if (message === "Number plate updated") {
        fetchLatestNumPlate();
        fetchData();
      }
    },
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/api/number-plate/cnic-timestamps/" + cameraID,
      );
      setCardData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoadingCardData(false);
    }
  };

  const fetchLatestNumPlate = async () => {
    try {
      const response = await axios.get(
        "/api/number-plate/cnic-timestamp-latest/" + cameraID,
      );
      setLatestNumPlate(response.data.data);
    } catch (error) {
      console.error("Error fetching latest Number Plate:", error);
    } finally {
      setIsLoadinglatestNumPlate(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchLatestNumPlate();
  }, []);

  return (
    <>
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleRefresh}
          className="flex items-center rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90"
          disabled={isLoadingCardData || isLoadinglatestNumPlate}
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Refresh
        </button>
      </div>
      <div className="row-span-2 mb-4 grid grid-cols-3 gap-4 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 row-span-1 h-full">
          <RTSPStream cam_id={cameraID} />
        </div>
        <div className="col-span-1 row-span-1">
          {isLoadinglatestNumPlate ? (
            <Loader />
          ) : (
            <a
              onClick={() => {
                handleShowAlert();
              }}
            >
              <NumPlateDataStats
                title="Latest Number Plate Details"
                id={cameraID}
                name={""}
                timestamp={""}
                imagePath={`${latestNumPlate.number_plate}`}
                allDetails={""}
                border={true}
                details={false}
              />
            </a>
          )}
        </div>
        {/* lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1
                <div className="row-span-2 col-span-2 md:col-span-2 sm:col-span-1 xsm:col-span-1">
                    <IDCardStatsChart />
                </div> */}
        <div className="col-span-1 row-span-1 h-full xsm:col-span-1 sm:col-span-1 md:col-span-1">
          {isLoadinglatestNumPlate ? (
            <Loader />
          ) : (
            <div className="flex h-full flex-col rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
              <h1 className="mb-4 text-2xl font-bold">
                Latest Number Plate Details
              </h1>
              <span>
                <b>ID:</b> {latestNumPlate.number_plate}
              </span>
              <span>
                <b>Timestamp:</b>{" "}
                {new Date(latestNumPlate.timestamp).toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
      {isLoadingCardData ? (
        <Loader />
      ) : (
        <div className="col-span-4">
          <NumPlateInfoTable numPlate={cardData} />
        </div>
      )}
    </>
  );
};

export default NumPlateCamera;
