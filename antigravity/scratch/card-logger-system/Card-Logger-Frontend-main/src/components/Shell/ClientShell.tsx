"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAPIURL } from "@/libs/api";
import Loader from "@/components/common/Loader";
import { mockAxiosRequest } from "@/libs/mockApi";

/**
 * ClientShell — isolates client-side state (loading spinner, axios config)
 * so that the root layout.tsx can remain a Server Component, which is
 * required by Next.js App Router.
 */
export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  const apiURL = getAPIURL();
  axios.defaults.baseURL = apiURL;
  axios.defaults.url = apiURL;

  useEffect(() => {
    // Intercept Axios requests when demoMode is enabled
    const interceptor = axios.interceptors.request.use((config) => {
      if (typeof window !== "undefined" && localStorage.getItem("demoMode") === "true") {
        const method = config.method || "get";
        const url = config.url || "";
        const data = config.data;
        const mockData = mockAxiosRequest(method, url, data);
        config.adapter = () => {
          return Promise.resolve({
            data: mockData,
            status: 200,
            statusText: "OK",
            headers: {},
            config,
          });
        };
      }
      return config;
    });

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <Loader /> : <>{children}</>;
}
