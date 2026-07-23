"use client";

import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// {
//     "status": "success",
//         "data": {
//             "daily_stats": {
//   "2024-07-29 11": 60,
//   "2024-07-29 12": 38,
//   "2024-07-29 13": 51,
//   "2024-07-29 14": 46,
//   "2024-07-29 15": 49,
//   "2024-07-28 17": 11,
//   "2024-07-28 18": 19,
//   "2024-07-28 19": 10,
//   "2024-07-28 20": 4,
//   "2024-07-28 21": 5,
//   "2024-07-28 22": 1,
//   "2024-07-28 23": 2,
//   "2024-07-29 00": 3,
//   "2024-07-29 04": 1,
//   "2024-07-29 05": 1,
//   "2024-07-29 06": 3,
//   "2024-07-29 07": 10,
//   "2024-07-29 08": 44,
//   "2024-07-29 09": 96,
//   "2024-07-29 10": 48,
//   "2024-07-29 16": 44,
//   "2024-07-29 17": 9
// },
//         "weekly_stats": {
//             "2024-07-02": 81,
//                 "2024-07-03": 95,
//                     "2024-07-04": 290,
//                         "2024-07-05": 329,
//                             "2024-07-06": 163,
//                                 "2024-07-07": 143,
//                                     "2024-07-08": 22
//         },
//         "monthly_stats": {
//             "2024-07-02": 81,
//                 "2024-07-03": 95,
//                     "2024-07-04": 290,
//                         "2024-07-05": 329,
//                             "2024-07-06": 163,
//                                 "2024-07-07": 143,
//                                     "2024-07-08": 22
//         }
//     },
//     "msg": "ID Cards Stats Chart"
// }

let options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: false,
    },
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  colors: ["#1f6e5c", "#a16207"],
  fill: {
    type: "solid",
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    labels: {
      style: {
        colors: "#787878",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#787878",
      },
    },
  },
  grid: {
    borderColor: "#E9E9E9",
  },
  tooltip: {
    x: {
      show: false,
    },
  },
};

interface IDCardStatsChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

const IDCardStatsChart: React.FC = () => {
  const [series, setSeries] = useState<IDCardStatsChartState["series"]>([
    {
      name: "Daily Stats",
      data: [],
    },
  ]);

  interface IData {
    daily_stats: Record<string, number>;
    weekly_stats: Record<string, number>;
    monthly_stats: Record<string, number>;
  }

  const [data, setData] = useState<IData>({
    daily_stats: {},
    weekly_stats: {},
    monthly_stats: {},
  });
  interface IChartStats {
    total_timestamps_this_week: number;
    total_timestamps_today: number;
    total_timestamps_this_month?: number;
  }

  const [chartStats, setChartStats] = useState<IChartStats>({
    total_timestamps_this_week: 0,
    total_timestamps_today: 0,
    total_timestamps_this_month: 0,
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [key, setKey] = useState(0);

  function handleDayClick() {
    setKey(0);

    const sortedDailyKeys = Object.keys(data.daily_stats).sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA.getTime() - dateB.getTime();
    });

    const dailyData = sortedDailyKeys.map((key) => data.daily_stats[key]);
    const categories = sortedDailyKeys.map((key) => key.split(" ")[1]);
    setCategories(categories);
    setSeries([
      {
        name: "Daily Stats",
        data: dailyData,
      },
    ]);
  }

  function handleWeekClick() {
    setKey(1);
    const sortedWeeklyKeys = Object.keys(data.weekly_stats).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });
    const weeklyData = sortedWeeklyKeys.map((key) => data.weekly_stats[key]);
    const categories = Object.keys(sortedWeeklyKeys);
    setCategories(categories);
    setSeries([
      {
        name: "Weekly Stats",
        data: weeklyData,
      },
    ]);
  }

  function handleMonthClick() {
    setKey(2);
    const sortedMonthlyKeys = Object.keys(data.monthly_stats).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });
    const monthlyData = sortedMonthlyKeys.map((key) => data.monthly_stats[key]);
    const categories = Object.keys(sortedMonthlyKeys);
    setCategories(categories);
    setSeries([
      {
        name: "Monthly Stats",
        data: monthlyData,
      },
    ]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dashboard/id-cards-stats-chart");
        const data = response.data.data;

        setData(data);

        const sortedDailyKeys = Object.keys(data.daily_stats).sort((a, b) => {
          const dateA = new Date(a);
          const dateB = new Date(b);
          return dateA.getTime() - dateB.getTime();
        });

        const dailyData = sortedDailyKeys.map((key) => data.daily_stats[key]);
        const categories = sortedDailyKeys.map((key) => key.split(" ")[1]);
        setCategories(categories);
        setSeries([
          {
            name: "Daily Stats",
            data: dailyData,
          },
        ]);

        setKey(0);



      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCountData = async () => {
      try {
        const response = await axios.get(
          "/api/dashboard/total-timestamps-stats",
        );
        const data = response.data.data;
        setChartStats(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchCountData();
  }, []);

  return (
    <div className="col-span-12 rounded-xl border border-cc-border-subtle bg-cc-bg-panel px-5 pb-5 pt-7.5 sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Today</p>
              <p className="text-sm font-medium">
                {chartStats.total_timestamps_today}
              </p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Weekly</p>
              <p className="text-sm font-medium">
                {chartStats.total_timestamps_this_week}
              </p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="border-tertiary mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-teal-200"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-teal-200">Monthly</p>
              <p className="text-sm font-medium">
                {chartStats.total_timestamps_this_month}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-cc-bg-elevated p-1.5">
            <button
              onClick={handleDayClick}
              className={
                "rounded px-3 py-1 text-xs font-medium text-cc-text-secondary hover:bg-cc-bg-panel hover:text-cc-text-primary " +
                (key === 0 ? "bg-cc-bg-panel text-cc-text-primary shadow-sm" : "")
              }
            >
              Day
            </button>
            <button
              onClick={handleWeekClick}
              className={
                "rounded px-3 py-1 text-xs font-medium text-cc-text-secondary hover:bg-cc-bg-panel hover:text-cc-text-primary " +
                (key === 1 ? "bg-cc-bg-panel text-cc-text-primary shadow-sm" : "")
              }
            >
              Week
            </button>
            <button
              onClick={handleMonthClick}
              className={
                "rounded px-3 py-1 text-xs font-medium text-cc-text-secondary hover:bg-cc-bg-panel hover:text-cc-text-primary " +
                (key === 2 ? "bg-cc-bg-panel text-cc-text-primary shadow-sm" : "")
              }
            >
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="IDCardStatsChart" className="-ml-5">
          <ReactApexChart
            key={key}
            options={{ ...options, xaxis: { ...options.xaxis, categories } }}
            series={series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default IDCardStatsChart;
