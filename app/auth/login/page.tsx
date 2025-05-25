"use client"
import LoginBox from "@/components/auth/login/Login";
import { useState } from "react"
export default function Login(){
    return(
        <div className="flex items-center justify-center h-screen bg-[#FFFDF2]">
            <LoginBox />    
        </div>
    )
}