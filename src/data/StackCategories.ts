interface StackCategory {
  label: string;
  items: string[];
}

const stackCategories: StackCategory[] = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C#', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind', 'React', 'React Native', 'Next.js'],
  },
  {
    label: 'Backend',
    items: ['.NET', 'ASP.NET Core', 'REST API'],
  },
  {
    label: 'Database',
    items: ['MySQL', 'PostgreSQL', 'PL/SQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'GitLab'],
  },
  {
    label: 'Environments',
    items: ['VS Code', 'IntelliJ IDEA', 'Unity'],
  },
];

export default stackCategories;
export type { StackCategory };
