"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CameraEditForm from "@/components/Camera/CameraEditForm";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSearchParams } from "next/navigation";

const Page = () => {

    const searchParams = useSearchParams();

    const cameraID = parseInt(searchParams.get("cameraID") || "0");
    const camerURL = searchParams.get("camerURL") || "";


  return (
    <DefaultLayout>
        <Breadcrumb pageName="Edit Camera" />
      <CameraEditForm id={cameraID} url={camerURL} />
    </DefaultLayout>
  );
}

export default Page;