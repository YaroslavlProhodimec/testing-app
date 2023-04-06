import React from 'react';
import style from '../common/styles/Container.module.css'
import s from './Footer.module.css'
const Footer = () => {
    return (
        <div className={`${s.wrapFooter} ${style.container}`}>
            <h1>Yaroslav Leonidovich</h1>

           <div className={s.blocks}>

           </div>
            <span className={s.allRight}>
All rights reserved</span>

        </div>
    );
};

export default Footer;