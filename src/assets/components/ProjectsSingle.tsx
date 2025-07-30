interface ProjectsSingleProps{
    img: string,
    name: string,
    description: string,
    github: string,
    stack: string[]
}

// export default function ProjectsSingle({stack,name,description,github}:ProjectsSingleProps){
//     return <div className=" w-200 bg-white/40 border-x-2 border-b-2 border-white p-5">
//             <h1 className="text-blue-400 font-bold ">{name}</h1>
//             <span className="text-white">{description}</span>
//             <div className="grid grid-cols-4 flex gap-4 pt-4">
//                 {stack.map((item,index) =>(
//                 <div className="bg-blue-400 text-white px-4 py-2 rounded-2xl " key={index}>
//                     {item}
//                 </div>
//             ))}
//             </div>
//       </div>
// }

// interface ProjectsSingleProps{
//     img: string,
//     name: string,
//     description: string,
//     github: string,
// }

export default function ProjectsSingle({img,name,description,github}:ProjectsSingleProps){
    return <div className="relative h-auto group mb-8">
        <img
          src={img}
          alt="name"
          className="w-200 h-auto object-cover hue-rotate-80 rounded-md"
        />

        <div className="absolute inset-0 bg-blue-800 opacity-40 pointer-events-none rounded-md" />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/80 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="text-white text-center px-4">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm pt-2 pb-10">{description}</p>
            <button className='bg-blue-400 py-2 px-4 rounded-2xl' onClick={() => window.location.href = github}>Check Github</button>
          </div>
        </div>
      </div>
}