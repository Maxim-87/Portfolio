import React from 'react';
import styles from './Main.module.scss';
import photo from '../../assets/image/photo.jpg';

export function Main() {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.container}>
        <div className={styles.home}>
          <img className={styles.photo} src={photo} alt=""/>
          <div className={styles.content}>
            <h3> HI THERE </h3>
            <h1> I am MAXIM PECHYONKIN </h1>
            <p> Frontend developer with experience in creating SPA using React, Redux,
              TypeScript, JavaScript, SCSS, HTML. I'm planning to Node.js, because in the
              future I see as a Full-stack developer. Usually I prefer to spend my leisure
              time on improving my English, studying new technologies and solve tasks on
              Codewars. Ready to consider project work and full-time employment. </p>
          </div>
        </div>
      </div>
    </div>
  )
}