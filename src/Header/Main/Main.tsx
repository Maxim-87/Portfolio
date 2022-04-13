import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import photo from '../../assets/image/Photo (2).png'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greet}>
                    <span> HI THERE </span>
                    <h1> I am MAXIM PECHYONKIN </h1>
                    <p> Frontend developer with experience in creating SPA using React, Redux, TypeScript, JavaScript, SCSS, HTML. I'm planning to Node.js, because in the future I see as a Full-stack developer. Usually I prefer to spend my leisure time on improving my English, studying new technologies and solve tasks on Codewars. Ready to consider project work and full-time employment.  </p>
                </div>
                <div>
                    <img src={photo} alt="" />
                </div>
            </div>

        </div>
    )
}