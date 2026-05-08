interface ProjectsProps {
  name: string;
  descritpion: string;
  github_link?: string;
  itchio_link?: string;
  live_link?: string;
  stack: string[];
}

const projects: ProjectsProps[] = [
  {
    name: 'CarBrowser',
    descritpion: 'Desktop app + REST API for browsing CEPiK vehicle registry data',
    github_link: 'https://github.com/mik0lajek/CarBrowser',
    stack: ['C#', '.NET 8', 'ASP.NET Core', 'WPF', 'REST API'],
  },
  {
    name: 'cosmic-flow',
    descritpion: 'Interactive Mars colonization landing page with animated Solar System navigation',
    github_link: 'https://github.com/Zwolak13/cosmic-flow',
    live_link: 'https://cosmic-flow.pages.dev',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'CSS'],
  },
  {
    name: 'ShopLifter',
    descritpion: 'Web application for managing shopping lists',
    github_link: 'https://github.com/Zwolak13/ShopLifter',
    stack: ['React', 'Tailwind', 'Java', 'Spring Boot', 'Gradle'],
  },
  {
    name: 'YAMSP',
    descritpion: 'Movie search app powered by TMDB API',
    github_link: 'https://github.com/Zwolak13/MovieSearch',
    stack: ['React', 'TypeScript', 'React Query', 'React Router', 'Vite'],
  },
  {
    name: 'Carlex',
    descritpion: 'Flexbox Froggy-inspired app for learning CSS flexbox interactively',
    github_link: 'https://github.com/Zwolak13/Carlex',
    stack: ['React', 'Tailwind', 'JavaScript', 'Vite'],
  },
  {
    name: 'MedievalHiccup',
    descritpion: 'Unity game inspired by Vampire Survivors',
    itchio_link: 'https://zwolak13.itch.io/medievalhiccup',
    stack: ['Unity', 'C#', 'Pixel Art', '2D'],
  },
];

export default projects;
export type { ProjectsProps };
