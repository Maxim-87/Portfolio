import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greet}>
                    <span> HI THERE </span>
                    <h1> I am MAXIM PECHYONKIN </h1>
                    <p> Frontend developer </p>
                </div>
                <div className={style.photo}> </div>
            </div>

        </div>
    )
}