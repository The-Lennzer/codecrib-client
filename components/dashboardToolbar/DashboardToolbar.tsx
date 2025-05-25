"use client";
import DashboardOption from "./DashboardOption";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
export default function DashboardToolbar() {
    return (
        <div className="w-[250px] min-h-screen fixed flex flex-col items-center 
                        justify-between bg-opacity-50">
            <div className="mt-[100px] w-full flex flex-col gap-3 items-end mr-4 justify-between text-black">
                <DashboardOption item="Dashboard" icon={<BiSolidDashboard  size={25} />}/>
                <DashboardOption item="Projects" icon={<LiaLaptopCodeSolid size={28} />}/>
                <DashboardOption item="Blogs" icon={<FaBook size={25} />}/>
                <DashboardOption item="Profile" icon={<GiPlagueDoctorProfile size={27} />}/>
            </div>
            <div className="w-full mr-4 flex flex-col gap-2 justify-center items-end text-black mb-[25px]">
                <DashboardOption item="Logout" icon={<TbLogout size={25} />}/>
            </div>
        </div>
    )
;}