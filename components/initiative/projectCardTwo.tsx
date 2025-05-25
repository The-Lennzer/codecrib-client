import Image from "next/image"
import { FaHeart } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { TbBookmarkFilled } from "react-icons/tb";
export default function ProjectCardTwo({ project }: { project: any }) {
    return (
        <div className="relative w-[385px] h-[320px] shadow-md 
                         transition-transform duration-300 ease-in-out transform
                          z-10 overflow-visible hover:z-50 
                         hover:scale-101 hover:shadow-2xl
                         hover:overflow-hidden">
            <div className="relative h-1/3 overflow-hidden w-full rounded-xl">
                <Image src={project.coverPhoto} alt="icon" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 z-10" />

                    {/* Text on top */}
                    <p className="absolute top-2 left-[64px] top-[83px] text-[16px] text-white font-bold z-20">
                        {project.username}
                    </p>
            </div>

            <div className="bg-white h-[50px] w-[50px] absolute rounded-full top-[77px] left-[10px] overflow-hidden z-100">
                <Image src={project.profileIcon} alt="icon" fill className="object-cover"/>
            </div>
            
            <div className="flex flex-col bg-white h-2/3 w-full">
                {/* Title of the Project*/}
                <div className="p-4">
                    <div className="flex justify-between pt-4">
                        <div>
                            <div className="text-xl text-black font-bold">{project.projectName}</div>
                        </div>
                        <div className="flex flex-wrap ml-[30px] items-center text-[10px] gap-[1px]">
                            {project.tags.map((tag: string, index: number) => (
                                <p key={index} className="bg-gray-300 text-[#242424] 
                                                        font-medium px-2 py-1 rounded-md 
                                                        text-center flex items-center justify-center">
                                {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="text-[16px] text-gray-800 font-light">
                            {project.projectDescription}
                        </div>    
                    </div> 
                </div>
                
                <div className="flex items-center gap-4 pl-4 pb-4 mt-auto">
                    <span className="flex items-center justify-center text-gray-400 text-[16px]">
                        <FaHeart className="align-middle" />
                    </span>
                    <span className="flex items-center justify-center text-gray-400 text-[18px]">
                        <BiRepost className="align-middle" />
                    </span>
                    <span className="flex items-center justify-center text-gray-400 text-[16px]">
                        <TbBookmarkFilled className="align-middle" />
                    </span>
                </div>
            </div>
        </div>
    )
}