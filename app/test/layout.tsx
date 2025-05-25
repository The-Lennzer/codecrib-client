import Navbar from "@/components/navbar/Navbar";
import DashboardToolbar from "@/components/dashboardToolbar/DashboardToolbar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <div className="flex justify-center">
        <Navbar />
        </div>
        <div>
            <div className="flex">
            <DashboardToolbar />
            <div className="w-full ml-[200px]">{children}</div>
            </div>
        </div>;
        </div>
}