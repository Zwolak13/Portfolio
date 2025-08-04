import TypingEffect from "../utils/TypingEffect";

export default function Header(){

    const titles = ['WebDev',"Frontend","Backend"];

    return(
        <section id="one" className="text-white w-[100%] h-[100vh] relative">
            <div className="w-full sm:w-1/2 h-full absolute flex flex-col sm:items-end pt-70">
                <div className="sm:block  flex flex-col items-center">
                    <h1 className="text-5xl font-liber pl-2">Hello I'm</h1>
                    <h1 className="sm:text-8xl text-5xl text-blue-400 font-geist tracking-tight">Dawid Zwolak</h1>
                    <TypingEffect texts={titles} typingSpeed={150} deletingSpeed={75} pauseDuration={2500} className="text-2xl font-liber pl-2"/>
                </div>
            </div>
        </section>
    )
}