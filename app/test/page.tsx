import InitiativeCard from "@/components/initiative/projectCard"
import ProjectCardTwo from "@/components/initiative/projectCardTwo"
import projects from "@/utils/data/projectData"
export default function testCard(){
    return(
        <div className="grid grid-cols-3 relative place-items-center gap-1 min-h-screen p-10 mt-10 isolation-isolate z-0">
            {   projects.map((project, index) =>  (
                <ProjectCardTwo project={project} />
            ))}   
        </div>
    )
}
