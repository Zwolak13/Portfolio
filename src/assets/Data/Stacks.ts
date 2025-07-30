import html from '../IMG/html5.png'
import css from '../IMG/css3.png'
import js from '../IMG/js.png'
import ts from '../IMG/ts.png'
import react from '../IMG/ReactIcong.png'

interface StackProps{
    name: string,
    type: 'Frontend' | 'Backend',
    img_path: string,

}

const stacks: StackProps[] = [
    {
        name:'HTML5',
        type:"Frontend",
        img_path: html,
    },
    {
        name:'CSS3',
        type:"Frontend",
        img_path: css
    }
    ,{
        name:'JavaScript',
        type:"Frontend",
        img_path: js
    },
    {
        name:'TypeScript',
        type:"Frontend",
        img_path: ts
    },
    {
        name:'React',
        type:"Frontend",
        img_path: react
    }
];

export default stacks;