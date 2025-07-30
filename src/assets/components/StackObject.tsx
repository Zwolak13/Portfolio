interface StakcObjectProps{
    name:string,
    image_path: string,
}

export default function StackObject({name,image_path}:StakcObjectProps){

    return <div className=" h-30 border-2 border-gray-200 bg-gray-100 rounded-2xl p-4 flex justify-center items-center">
        <div className="w-100% flex flex-col items-center gap-3">
            <img src={image_path} alt={`${name}-alt`} className="w-10 "/>
            <h1 className="text-[#507dbc] font-bold">{name}</h1>
        </div>
    </div>
}