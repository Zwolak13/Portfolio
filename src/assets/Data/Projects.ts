import shoplifter from '../IMG/Shoplifter.png'
import carlex from '../IMG/carlex.png'
import yamsp from '../IMG/yamsp.png'

interface ProjectsProps{
    name: string,
    descritpion: string,
    img_path: string,
    github_link?: string,
    itchio_link?: string,
    stack: string[]
}

const projects:ProjectsProps[] = [
    {
        name: 'ShopLifter',
        descritpion: 'Webapplication for managing shopping lists',
        img_path: shoplifter,
        github_link: 'https://github.com/Zwolak13/ShopLifter',
        stack: ['React','Tailwind', 'Java', "Gradle", 'SpringBoot','Vite','JS']
    },
    {
        name: 'Carlex',
        descritpion: 'App inspired by Flexbox Froggy for learning flexbox',
        img_path: carlex,
        github_link: 'https://github.com/Zwolak13/Carlex',
        stack: ['React', 'Tailwind', 'JS','Vite']
    },
    {
        name: 'YAMSP',
        descritpion: 'Movie Search with TMDB API',
        img_path: yamsp,
        github_link: 'https://github.com/Zwolak13/MovieSearch',
        stack: ['React', 'Tailwind', 'TS', 'React Query', 'React Router', 'API','Vite']
    },
    {
        name: 'MedievalHiccup',
        descritpion: 'Unity game inspired by Vampire Survivors, implementing basic concepts',
        img_path: yamsp,
        itchio_link: 'https://zwolak13.itch.io/medievalhiccup',
        stack: ['Unity','C#','Pixelart','2D']
    },
]

export default projects;