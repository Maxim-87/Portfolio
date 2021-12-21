import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Title} from "../common/components/title/Title";

export function Skills () {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                <Skill title={'React'} discription={'I am developing Apps for international company'}/>
                <Skill title={'JavaScript'} discription={'I am developing Apps for international company'}/>
                <Skill title={'CSS, HTML'} discription={'I am developing Apps for international company'}/>
                </div>
            </div>
        </div>
    )
}