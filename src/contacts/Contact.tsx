import React from 'react';
import s from './Contact.module.css'
import style from '../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={s.containerMain}>
            <div className={`${s.containerWrap} ${style.container}`}>
                <h1 className={s.contact}>
                    Сontacts</h1>

                <form className={s.sizeForm}>
                    <label className={s.wrapInput}>

                        <input />
                        <input />
                        <textarea name="" id="" cols={30} rows={10}></textarea>
                    </label>

                </form>
                <button className={s.button}>SENT</button>

            </div>
        </div>
    );
};

