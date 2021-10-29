import React from 'react';
import style from './Project.module.css'

type projectPropsType = {
    title: string
    direction: string
}

export function Project(props: projectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgProject}>
                <a href=''> Look at </a>
            </div>
            <h3> {props.title} </h3>
            <span> {props.direction} </span>
        </div>
    )
}