"use client";
import { ReactElement } from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";
export default function DashboardOption({ item, icon }: { item: string, icon: ReactElement }) {
    return(
        <div className="w-[95%] h-[45px] flex justify-start items-center font-medium
                        text-black hover:rounded-md hover:bg-[#242424] hover:text-white hover:bg-opacity-10">
            <div className="flex ml-4">
                {icon}
                <span className="ml-2">
                    <p>{item}</p>
                </span>
            </div>
        </div>
    ); 
}