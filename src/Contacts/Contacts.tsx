import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <div>
                    <h2 className={style.contactsTitle}> Contacts </h2>
                </div>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button className={style.buttonContacts}> Send </button>
            </div>

        </div>
    )
}