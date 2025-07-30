import projects from "../Data/Projects";
import ProjectsSingle from "./ProjectsSingle";

export default function ProjectsList() {
  return (
    <div className="">
        {projects.map((item,index) => (
            <ProjectsSingle key={index} name={item.name} description={item.descritpion} github={item.github_link} img={item.img_path} stack={item.stack}/>
        ))}
    </div>
  );
}
