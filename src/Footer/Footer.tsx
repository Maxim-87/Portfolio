import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.footerTitle}> Maxim Pechyonkin </h2>
                <div className={style.iconsBlock}>
                    <div className={style.icons}></div>
                    <div className={style.icons}></div>
                    <div className={style.icons}></div>
                    <div className={style.icons}></div>
                </div>

                <h4 className={style.runningTitle}> Все права защищены </h4>
            </div>
        </div>
    )
}