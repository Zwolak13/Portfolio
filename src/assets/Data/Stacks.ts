import html from '../IMG/html5.png'
import css from '../IMG/css3.png'
import js from '../IMG/js.png'
import ts from '../IMG/ts.png'
import react from '../IMG/ReactIcong.png'
import java from '../IMG/java.png'
import cs from '../IMG/cs.png'
import python from '../IMG/python.png'
import plsql from '../IMG/plsql.png'
import mysql from '../IMG/mysql.png'
import github from '../IMG/github.png'
import git from '../IMG/git.png'
import intelij from '../IMG/intelij.png'
import pycharm from '../IMG/pycharm.png'
import vscode from '../IMG/vscode.png'
import postgresql from '../IMG/postgressql.png'

interface StackProps{
    name: string,
    type: 'Frontend' | 'Backend' | 'Tools' | 'Database',
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
    ,
    {
        name:'Java',
        type:"Backend",
        img_path: java
    },
    {
        name:'Python',
        type:"Backend",
        img_path: python
    },
    {
        name:'C#',
        type:"Backend",
        img_path: cs
    }
    ,
    {
        name:'MySQL',
        type:"Database",
        img_path: mysql
    }
    ,
    {
        name:'PostgresSQL',
        type:"Database",
        img_path: postgresql
    }
    ,
    {
        name:'PLSQL',
        type:"Database",
        img_path: plsql
    },
    {
        name:'Github',
        type:"Tools",
        img_path: github
    }
    ,
    {
        name:'Git',
        type:"Tools",
        img_path: git
    }
    ,
    {
        name:'InteliJ',
        type:"Tools",
        img_path: intelij
    }
    ,
    {
        name:'Pycharm',
        type:"Tools",
        img_path: pycharm
    }
    ,
    {
        name:'VSCode',
        type:"Tools",
        img_path: vscode
    }
];

export default stacks;