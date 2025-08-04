import Timeline from "./Timeline";


export default function Education(){
    return <section id="two" className={`w-[100vw] min-h-[110vh] bg-black flex  text-blue-500 relative`}>
        <h1 className="absolute text-blue-400 text-5xl sm:top-20 sm:left-80 left-20">
            Education
        </h1>
        <div className="sm:w-1/2 w-full pt-10 flex sm:justify-end justify-center ">
            <Timeline />
        </div>
    </section>
}