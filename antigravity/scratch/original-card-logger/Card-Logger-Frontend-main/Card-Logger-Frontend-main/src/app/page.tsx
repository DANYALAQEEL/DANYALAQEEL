import ECommerce from "@/components/Dashboard/E-commerce";
import ChartOne from "@/components/Charts/ChartOne";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "ANPR | Home",
  description: "ANPR | Home",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col w-full h-full p-4">
          <div>
            <ECommerce />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
