import WindowRoll from "./WindowRoll";
import projects from "../Data/Projects";
import ProjectsSingle from "./ProjectsSingle";


export default function Projects(){
    

    return <section id="four" className={`w-[100vw] lg:min-h-[100vh] min-h-[140vh] bg-black  relative `}>
        <h1 className="absolute text-blue-400 text-5xl lg:top-20 lg:left-120 top-10 right-25">Projects</h1>
        <WindowRoll className="absolute lg:top-60 lg:left-[20%] top-40 " title="Projects.log" footerText="Projects">
            {projects.map((item,index) => (
            <ProjectsSingle key={index} name={item.name} description={item.descritpion} github={item.github_link} img={item.img_path} stack={item.stack} itchio={item.itchio_link}/>
        ))}
        </WindowRoll>
    </section>
}