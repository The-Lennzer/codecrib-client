"use client"
import Api from "@/utils/Api";
export default function Resource(){
    function handleSubmit(){
        let resource = Api.getResource();
        console.log(resource);
    };
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Get resource</button>
        </div>
    )
}