import React from 'react';
import './Header.module.css';
import style from './Header.module.css';
import {Nav} from "./Nav";


export function Header () {
  return (
    <div className={style.header}>
        <Nav/>
    </div>
  )
}