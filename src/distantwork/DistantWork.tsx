import React from 'react'
import s from './DistantWork.module.css';
import style from '../common/styles/Container.module.css'
export const DistantWork = () => {
    return (<>
        <div className={`${s.offerJobContainer}  `}>
            <div className={`${s.offerJob} ${style.container} `}>
            <h1 >Offer me a remote job</h1>
            <button className={s.btn}>Hire me</button></div></div>
         </>
    );
};

