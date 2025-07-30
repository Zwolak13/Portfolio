import TimelineDot from "./TimelineDot";
import education from "../Data/Education";

export default function Timeline() {
  return (
    <div className="p-8" >
      {education.map((item, index) => (
        <TimelineDot
            key={index}
            side={index % 2 === 0 ? 'left' : 'right'}
            last={index+1 === education.length && true}
            name={item.school}
            title={item.title}
            period={item.period}
        />
    ))}
    </div>
  );
}
