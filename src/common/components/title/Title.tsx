import React from 'react';
import style from './Title.module.scss'

type TitleType = {
    text: string
    before: boolean
}
export function Title(props: TitleType) {
    const before = props.before ? style.projectsTitleBefore : ""
    return (
        <div className={`${style.projectsTitle} ${before}`}>
            <h2> {props.text} </h2>
        </div>
    )
}