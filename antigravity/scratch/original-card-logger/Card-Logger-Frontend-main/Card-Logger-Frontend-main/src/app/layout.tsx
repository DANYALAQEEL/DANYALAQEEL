"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAPIURL } from "@/libs/api";

import Loader from "@/components/common/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const apiURL = getAPIURL();
  axios.defaults.baseURL = apiURL;
  axios.defaults.url = apiURL;

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta         
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Dashboard</title>
      </head>
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
        <div className="h-screen dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
