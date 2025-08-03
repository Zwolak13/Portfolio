import { FaGithub } from 'react-icons/fa'

interface ProjectsSingleProps{
    img: string,
    name: string,
    description: string,
    github: string,
    stack: string[]
}

export default function ProjectsSingle({stack,name,description,github}:ProjectsSingleProps){
    return <div className=" border-x-2 border-b-2 border-white p-5">
              <div className='flex flex-row text-blue-400 items-center gap-4'>
                <h1 className=" text-2xl font-bold">{name}</h1>
                <a href={github} target='_blank'><FaGithub className='h-6 w-6 '/></a>
              </div>
            <span className="text-white">{description}</span>
            <div className="flex flex-wrap gap-4 pt-4">
                {stack.map((item,index) =>(
                <div className="bg-blue-400 text-white px-4 py-2 rounded-2xl whitespace-nowrap" key={index}>
                    {item}
                </div>
            ))}
            </div>
      </div>
}

