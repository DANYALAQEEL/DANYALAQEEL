import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Dashboard />
            </DefaultLayout>
        </>
    );
}
