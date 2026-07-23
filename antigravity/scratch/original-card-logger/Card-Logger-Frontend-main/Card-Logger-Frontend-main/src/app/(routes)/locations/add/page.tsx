"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CameraPreviewCard from "@/components/Cards/CameraPreviewCard";
import { NextPage } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAPIURL } from "@/libs/api";
import Image from "next/image";

const Page: NextPage = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Locations" />
    </DefaultLayout>
  );
};

export default Page;
