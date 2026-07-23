import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CnicCount from "@/components/Dashboard/CnicCount";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <CnicCount />
      </DefaultLayout>
    </>
  );
}
