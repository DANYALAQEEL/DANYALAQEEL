"use client";
import { useParams, useSearchParams } from "next/navigation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CNICCamera from "@/components/Camera/CNICCameraPage";
import NumPlateCamera from "@/components/Camera/NumPlateCamera";

export default function IDCardCamera() {

  const searchParams = useSearchParams();

  const cameraID = parseInt(searchParams.get("cameraID") || "0");
  const cameraType = searchParams.get("cameraType") || "cnic";
  const cameraName = searchParams.get("cameraName") || "Unknown";

  function getCamType() {
    if (cameraType === "cnic") {
      return "CNIC Camera";
    } else if (cameraType === "num_plate") {
      return "Number Plate Camera";
    } else {
      return "Unknown";
    }
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName={cameraName} />
      {
        (cameraType === "cnic") ? (
          <CNICCamera
            cameraID={cameraID}
            cameraType={cameraType}
            cameraName={cameraName}
          />
        ) : (
          cameraType === "num_plate_rfid" ? (
            <NumPlateCamera
              cameraID={cameraID}
              cameraType={cameraType}
              cameraName={cameraName}
            />
          ) : (
            <div>Unknown Camera Type</div>
          )
        )
      }
    </DefaultLayout>
  );
}
