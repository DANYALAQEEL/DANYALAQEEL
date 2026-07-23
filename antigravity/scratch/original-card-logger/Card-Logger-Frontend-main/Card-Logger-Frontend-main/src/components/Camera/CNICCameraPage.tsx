"use client";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import useWebSocket from "@/hooks/useWebSocket";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CNICCardDataStats from "@/components/Cards/CNICCardDataStats";
import IDCardInfoTable from "@/components/Tables/IDCardInfoTable";
import RTSPStream from "@/components/Camera/RTSPStream";
import IDCardStatsChart from "@/components/Charts/IDCardStatsChart";
import Loader from "@/components/common/Loader";
import axios from "axios";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Swal from "sweetalert2";
import { createRoot } from "react-dom/client";
import Image from "next/image";
import { getAPIURL } from "@/libs/api";
import CardDataStats from "@/components/CardDataStats";
import exp from "constants";

const CNICCamera: React.FC<{
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
  const [latestIDCard, setLatestIDCard] = useState({
    id: "",
    name: "",
    timestamp: "",
    imagePath: "",
    allDetails: "",
    isGuest: false,
  });
  const [totalIDCardsToday, setTotalIDCardsToday] = useState({
    total_cards_for_day: "",
    cards_day_difference_percentage: "",
    card_difference_direction: "up",
  });

  const [isLoadingCardData, setIsLoadingCardData] = useState(true);
  const [isLoadingLatestIDCard, setIsLoadingLatestIDCard] = useState(true);
  const [isLoadingtotalIDCardsToday, setIsLoadingtotalIDCardsToday] =
    useState(true);

  // Add this state variable with other useState declarations
  const [lastCheckedCardId, setLastCheckedCardId] = useState<string>("");

  const handleShowAlert = () => {
    const modalComponent = document.createElement("div");

    const root = createRoot(modalComponent);

    root.render(
      <CNICCardDataStats
        title="Latest ID Card Details"
        id={latestIDCard.id}
        name={latestIDCard.name}
        timestamp={latestIDCard.timestamp}
        imagePath={latestIDCard.imagePath}
        allDetails={latestIDCard.allDetails}
        isGuest={latestIDCard.isGuest}
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
        handleDownloadImage(latestIDCard.id);
      }
    });
  };

  const handleRefresh = () => {
    setIsLoadingCardData(true);
    setIsLoadingLatestIDCard(true);
    setIsLoadingtotalIDCardsToday(true);

    fetchData();
    fetchLatestIDCard();
    fetchTotalIDCardsToday();
  };

  const handleDownloadImage = async (id: string) => {
    // console.log('Downloaded');
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
  const handleVIPPopup = (cardData: any) => {
    const modalComponent = document.createElement("div");
    const root = createRoot(modalComponent);

    root.render(
      <CNICCardDataStats
        title="Guest Alert"
        id={cardData.id}
        name={cardData.name}
        timestamp={cardData.timestamp}
        imagePath={cardData.imagePath}
        allDetails={cardData.allDetails}
        isGuest={cardData.isGuest}
        border={false}
        details={true}
      />,
    );

    Swal.fire({
      title: "🌟Guest Detected!",
      html: modalComponent,
      showConfirmButton: true,
      confirmButtonText: "Download Image",
      showCancelButton: true,
      cancelButtonText: "Close",
      customClass: {
        popup:
          "rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark h-full dark:text-white w-full max-w-[800px]",
      },
      iconColor: "#856404",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDownloadImage(cardData.id);
      }
    });
  };

  useWebSocket({
    url: process.env.NEXT_PUBLIC_WS_NOTIFY_URL! + "/api/websockets/card-update",
    onMessage: (message) => {
      if (message === "Table updated") {
        fetchLatestIDCard();
        fetchData();
      }
    },
  });
  const fetchTotalIDCardsToday = async () => {
    try {
      const response = await axios.get("/api/dashboard/total-id-cards");
      setTotalIDCardsToday(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoadingtotalIDCardsToday(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "/api/id-card-camera/cnic-timestamps/" + cameraID,
      );
      setCardData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoadingCardData(false);
    }
  };

  const fetchLatestIDCard = async () => {
    try {
      const response = await axios.get(
        "/api/id-card-camera/cnic-timestamp-latest/" + cameraID,
      );
      const newCardData = response.data.data;

      // Check if this is a new VIP card
      if (
        newCardData.isGuest &&
        newCardData.id !== lastCheckedCardId &&
        newCardData.id !== latestIDCard.id &&
        lastCheckedCardId !== ""
      ) {
        handleVIPPopup(newCardData);
      }

      setLatestIDCard(newCardData);
      setLastCheckedCardId(newCardData.id);
    } catch (error) {
      console.error("Error fetching latest ID card:", error);
    } finally {
      setIsLoadingLatestIDCard(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchLatestIDCard();
    fetchTotalIDCardsToday();
  }, []);

  return (
    <>
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleRefresh}
          className="flex items-center rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90"
          disabled={
            isLoadingCardData ||
            isLoadingLatestIDCard ||
            isLoadingtotalIDCardsToday
          }
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
          {isLoadingLatestIDCard ? (
            <Loader />
          ) : (
            <a
              onClick={() => {
                handleShowAlert();
              }}
            >
              <CNICCardDataStats
                title="Latest ID Card"
                id={latestIDCard.id}
                name={latestIDCard.name}
                timestamp={latestIDCard.timestamp}
                imagePath={latestIDCard.imagePath}
                allDetails={latestIDCard.allDetails}
                isGuest={latestIDCard.isGuest}
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
          {isLoadingtotalIDCardsToday ? (
            <Loader />
          ) : (
            <div className="flex h-full flex-col rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
              <h1 className="mb-4 text-2xl font-bold">
                Latest ID Card Details
              </h1>
              <span className="mb-2 flex flex-col items-center justify-center">
                <span className="flex items-center gap-2">
                  <b>Guest:</b>
                  <span
                    className={
                      latestIDCard.isGuest
                        ? "font-bold text-green-600"
                        : "text-red-600 font-bold"
                    }
                  >
                    {latestIDCard.isGuest ? "True" : "False"}
                  </span>
                </span>
              </span>
              <span>
                <b>Name:</b> {latestIDCard.name}
              </span>
              <span>
                <b>ID:</b> {latestIDCard.id}
              </span>
              <span>
                <b>Timestamp:</b>{" "}
                {new Date(latestIDCard.timestamp).toLocaleString()}
              </span>
              <span className="overflow-hidden text-ellipsis">
                <b>Details:</b> {latestIDCard.allDetails}
              </span>
            </div>
          )}
        </div>
      </div>
      {isLoadingCardData ? (
        <Loader />
      ) : (
        <div className="col-span-4">
          <IDCardInfoTable cardData={cardData} />
        </div>
      )}
    </>
  );
};

export default CNICCamera;
