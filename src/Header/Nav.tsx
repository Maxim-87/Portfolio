import React from 'react';
import './Header.module.css';
import style from './Nav.module.scss';

export function Nav () {
  return (
    <div className={style.nav}>
        <a className={style.name} href=''> Main menu </a>
        <a className={style.name} href=''> Skills </a>
        <a className={style.name} href=''> Projects </a>
        <a className={style.name} href=''> Contacts </a>
    </div>
  )
}