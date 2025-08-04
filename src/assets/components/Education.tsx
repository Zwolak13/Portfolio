import Timeline from "./Timeline";


export default function Education(){
    return <section id="two" className={`w-[100vw] min-h-[110vh] bg-black flex  text-blue-500 relative overflow-hidden`}>
        <h1 className="absolute text-blue-400 text-5xl lg:top-20 lg:left-80 left-20">
            Education
        </h1>
        <div className="lg:w-1/2 w-full pt-10 flex lg:justify-end justify-center ">
            <Timeline />
        </div>
    </section>
}