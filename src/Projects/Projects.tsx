import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";
// import todoImage from "../assets/image/Todo.jpg";
// import socialNetImage from "../assets/image/SocialNet.jpg";

export function Projects() {
    const social = {
        // backgroundImage: `url(${socialNetImage})`
    }

    const todo = {
        // backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"My Projects"} before={true}/>
                <div className={style.projects}>
                    {/*<Project style={social} title={'TODOLIST'} direction={'My project for business'}/>*/}
                    {/*<Project style={todo} title={'SOCIAL Network'} direction={'My project for communication '}/>*/}
                </div>
            </div>
        </div>
    )
}