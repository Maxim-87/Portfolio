import React from 'react';
import style from './Project.module.scss'

type projectPropsType = {
    title: string
    direction: string
    style: StyleType
}

type StyleType = {
    backgroundImage: string;
}

export function Project(props: projectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgProject} style={props.style}>
                <a className={style.href} href=''> Look at </a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}> {props.title} </h3>
                <span className={style.description}> {props.direction} </span>
            </div>
        </div>
    )
}