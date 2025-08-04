import TypingEffect from "../utils/TypingEffect";

export default function Header(){

    const titles = ['WebDev',"Frontend","Backend"];

    return(
        <section id="one" className="text-white w-[100%] h-[100vh] relative overflow-hidden">
            <div className="w-full lg:w-1/2 h-full absolute flex flex-col lg:items-end pt-70">
                <div className="lg:block  flex flex-col items-center">
                    <h1 className="text-5xl font-liber pl-2">Hello I'm</h1>
                    <h1 className="lg:text-8xl text-5xl text-blue-400 font-geist tracking-tight">Dawid Zwolak</h1>
                    <TypingEffect texts={titles} typingSpeed={150} deletingSpeed={75} pauseDuration={2500} className="text-2xl font-liber pl-2"/>
                </div>
            </div>
        </section>
    )
}