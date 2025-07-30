import { useRef, useState, useEffect} from "react";
import { Home, User, Folder, Phone, GraduationCap, Layers } from 'lucide-react';
import '../CSS/nav.css'

export default function Nav(){
    const navRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>('one');

    const navItems = [
        { id: 'one', icon: Home },
        { id: 'two', icon: GraduationCap },
        { id: 'three', icon: Layers },
        { id: 'four', icon: Folder },
        { id: 'five', icon: User },
        { id: 'six', icon: Phone }
    ];
    
    function scrollToSection(sectionID: string) {
        const element = document.getElementById(sectionID);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function updateIndicator(sectionID: string) {
        const index = navItems.findIndex(item => item.id === sectionID);
        const activeElement = navRefs.current[index];
        const indicator = indicatorRef.current;

        if(activeElement && indicator){
            indicator.style.top = `${activeElement.offsetTop}px`;
            indicator.style.height = `${activeElement.offsetHeight}px`;
        }
    }

    function handleSectionChange(sectionID: string){
        setActiveSection(sectionID);
        updateIndicator(sectionID);
        scrollToSection(sectionID);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        updateIndicator(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="z-2 bg-black py-5 flex flex-col gap-4 px-4 rounded-4xl w-fit h-fit fixed left-4 top-1/2 -translate-y-[50%] nav-border">
            
            {navItems.map((item, index) => (
                <span 
                    key={item.id}
                    className={`p-2 text-xl z-2 transition-all duration-200 rounded-lg ${
                        activeSection === item.id ? 'bg-white/10' : 'hover:bg-white/5'
                    }`} 
                    ref={(el) => {navRefs.current[index] = el}} 
                    onClick={() => handleSectionChange(item.id)}
                >
                    <item.icon className={`transition-colors duration-200 ${
                        activeSection === item.id ? 'stroke-blue-400' : 'stroke-white hover:stroke-blue-300'
                    }`}/>
                </span>
            ))}
                
            <div ref={indicatorRef} className="absolute border-2 border-blue-400 z-1 h-10 rounded-4xl transition-all duration-300"
                style={{ width: '40px', top: '20px' }}>
            </div>
            <div className="bg-black w-[90%] h-[97%] z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-4xl px-4 py-5"/>
        </nav>
    )
}