import DefaultLayout from "@/components/Layouts/DefaultLayout";
import NumberPlatesCount from "@/components/Dashboard/NumberPlatesCount";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <NumberPlatesCount />
      </DefaultLayout>
    </>
  );
}
