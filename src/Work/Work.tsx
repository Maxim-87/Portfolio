import React from 'react';
import style from './Work.module.css';
import styleContainer from "../common/styles/Container.module.css";

export function Work() {
    return (
        <div className={style.work}>
            <div className={`${styleContainer.container} ${style.workBlock}`}>
                <h2 className={style.workTitle}> Considering options for Remote work </h2>
                <button className={style.workButton}> <b> Hire me </b>  </button>
            </div>
        </div>

    )
}

