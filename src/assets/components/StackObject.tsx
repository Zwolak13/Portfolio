interface StakcObjectProps{
    name:string,
    image_path: string,
}

export default function StackObject({name,image_path}:StakcObjectProps){

    return <div className="flex justify-center flex-col items-center ">
        <div className="w-100% flex flex-col items-center gap-3 border-1 p-10 rounded-xl">
            <img src={image_path} alt={`${name}-alt`} className="w-10 "/>
        </div>
        <h1 className="text-[#cddbee] font-bold pt-2">{name}</h1>
    </div>
}