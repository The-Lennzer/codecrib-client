"use client";
import { RiAccountCircle2Line } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
export default function Navbar(){
    const router = useRouter();
    return (
        <div className="h-[56px] bg-orange-600 min-w-[95%] fixed mt-4 z-[999] rounded-xl border-b-[1px] shadow-md">
            <div className="flex justify-between items-center h-full ml-auto pl-12 pr-4">
                <div className="flex items-center gap-1">
                    <Image src="/assets/logo-2.svg" alt="logo" width={65} height={60} />
                    <div className="flex text-[24px] font-bold">
                        <span className="text-[#242424]">Code</span>
                        <span className="text-orange-600">Crib</span>
                    </div>
                </div>
                <div className="flex flex-row gap-10 text-[16px] font-medium text-[#242424] mr-6">
                    <div>Browse</div>
                    <div>Blogs</div>
                    <div>Create</div>
                    <div className="hover:cursor-pointer" onClick={() => {router.push('/auth/login')}}>Login</div>
                    <div className="text-[#242424]">
                        <RiAccountCircle2Line size={25}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}