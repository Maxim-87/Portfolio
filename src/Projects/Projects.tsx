import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.projectsTitle}> My Projects </h2>
                <div className={style.projects}>
                    <Project title={'TODOLIST'} direction={'My project for business'}/>
                    <Project title={'SOCIAL Network'} direction={'My project for communication '}/>
                </div>
            </div>
        </div>
    )
}