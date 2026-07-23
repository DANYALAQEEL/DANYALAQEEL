"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CameraEditForm from "@/components/Camera/CameraEditForm";
import { useSearchParams } from "next/navigation";

const Page = () => {

    const searchParams = useSearchParams();

    const cameraID = parseInt(searchParams.get("cameraID") || "0");
    const camerURL = searchParams.get("camerURL") || "";


  return (
    <div className="space-y-6">
        <Breadcrumb pageName="Edit Camera" />
      <CameraEditForm id={cameraID} url={camerURL} />
    </div>
  );
}

export default Page;