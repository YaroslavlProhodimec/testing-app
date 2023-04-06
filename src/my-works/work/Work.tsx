import React from 'react';
import photo from './photo.jpg'
import s from './Work.module.css'
export const Work = () => {
    return ( <div className={s.containerWork}>
        <div className={s.containerImage}>

                <button className={s.btn}>View</button>
        </div>
<div className={s.description}>
                <span>Project name</span>
            <p>Description</p></div>
       </div>
    );

};

