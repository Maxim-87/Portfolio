import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    discription: string
}

export function Skill (props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}> </div>
                <h3> {props.title} </h3>
            <span className={style.discription}> {props.discription} </span>
        </div>
    )
}