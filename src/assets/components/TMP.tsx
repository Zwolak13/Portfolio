interface TMPProps{
    title:string;
    color: string;
}

export default function TMP({title,color}:TMPProps){
    return <section className={`w-[100vw] h-[100vh] bg-${color}-800 flex justify-center text-8xl text-blue-500`}>
        <h1>{title}</h1>
    </section>
}