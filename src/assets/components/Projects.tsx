import WindowRoll from "./WindowRoll";
import projects from "../Data/Projects";
import ProjectsSingle from "./ProjectsSingle";


export default function Projects(){
    

    return <section id="four" className={`w-[100vw] min-h-[100vh] bg-black  relative `}>
        <h1 className="absolute text-blue-400 text-5xl sm:top-20 sm:left-120">Projects</h1>
        <WindowRoll className="absolute top-60 right-140" title="Projects.log" footerText="Projects">
            {projects.map((item,index) => (
            <ProjectsSingle key={index} name={item.name} description={item.descritpion} github={item.github_link} img={item.img_path} stack={item.stack}/>
        ))}
        </WindowRoll>
    </section>
}