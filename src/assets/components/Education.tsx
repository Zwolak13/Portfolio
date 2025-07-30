import Timeline from "./Timeline";


export default function Education(){
    return <section id="two" className={`w-[100vw] min-h-[100vh] bg-black flex  text-blue-500 relative -z-20`}>
        <div className="w-1/2 flex justify-end">
            <Timeline />
        </div>
        <h1 className="absolute text-blue-400 text-5xl top-20 left-80">
            Education
        </h1>
    </section>
}