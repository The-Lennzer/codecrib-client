"use client";
import Image from "next/image";
import Rabbit from "../../public/assets/rabbit.png";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaShareFromSquare } from "react-icons/fa6";
import { AiFillSave } from "react-icons/ai";
import { useState } from "react";

type Initiative = {
  id: string;
  title: string;
  shortDescription: string;
  genre: string[];
  size: string;
  coverImage: string;
  username: string;
  lookingForCollab: boolean;
};

type Props = {
  data: Initiative;
};

export default function InitiativeCard() {
    const [liked, setLiked] = useState(false);
    const [shared, setShared] = useState(false);
    const [saved, setSaved] = useState(false);
  return (
    <div className="bg-blue-400 bg-opacity-0 w-[350px] h-[300px] rounded-xl shadow-md relative border-white border-[4px]">
        <div className="flex">
            <div className="m-[12px_0px_0px_12px] bg-green-500 h-[40px] w-[40px] rounded-full overflow-hidden relative">
                <Image
                    src="/assets/zoro.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                />
            </div>
            <p className="m-[20px_0px_0px_12px] font-bold text-white">lennzer_</p>
        </div>

        <div className="flex justify-center items-center h-[150px] w-[150px] bg-red-500 overflow-hidden absolute left-[185px] bottom-[135px] rounded-xl shadow-xl">
            <Image src="/assets/code-4.jpeg" alt="icon" fill className="object-cover" />
        </div>

        <div>
            <div className="flex m-[20px_0px_0px_15px]">
                <h1 className="ml-0 text-white font-bold text-2xl text-center">Imageon.io</h1>
            </div>

            <div className="flex gap-2 m-[20px_0px_0px_15px]">
                <p className="ml-0 bg-amber-500 text-black font-bold text-[10px] w-[35px] h-[16px] rounded-[0px_10px] text-center">tech</p>
                <p className="ml-0 bg-amber-500 text-black font-bold text-[10px] w-[35px] h-[16px] rounded-[0px_10px] text-center">AI</p>
                <p className="ml-0 bg-amber-500 text-black font-bold text-[10px] w-[35px] h-[16px] rounded-[0px_10px] text-center">Web</p>
            </div>

            <div
                // style={{ boxShadow: 'inset 0px 6px 12px rgba(0, 0, 0, 0.25)' }}
                className="flex items-center w-[95%] h-[100px] m-[20px_0px_0px_15px] rounded-xl"
            >
                <p className="text-[12px] text-white font-medium leading-6 tracking-wide">
                    A cutting-edge web platform that 
                    simplifies image management
                    and collaboration for creative professionals.
                </p>
            </div>
                
            <div className="flex flex-end pb-6">
                <div onClick={() => setLiked(!liked)} className="flex cursor-pointer ml-[12px] mt-[8px]">
                    {liked ? <TiHeartFullOutline size={15} color="#EC003F" /> : <TiHeartFullOutline size={15} color="gray"/>}
                </div>
                <div onClick={() => setShared(!shared)} className="cursor-pointer ml-[12px] mt-[8px]">
                    {shared ? <FaShareFromSquare size={15} color="#00C950" /> : <FaShareFromSquare size={15} color="gray"/>}
                </div>
                <div onClick={() => setSaved(!saved)} className="cursor-pointer ml-[12px] mt-[8px]">
                    {saved ? <AiFillSave size={15} color="#FFDF20"/> : <AiFillSave size={15} color="gray"/>}
                </div>
            </div>
        </div>
    </div>
  );
}
