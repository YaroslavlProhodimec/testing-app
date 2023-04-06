import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './MyWorks.module.css'
import {Work} from "./work/Work";
export const MyWorks = () => {
    return (
        <div className={s.worksMainContainer}>
        <div className={`${styleContainer.container} ${s.MyWorksContainer}`}>
          <h4 >My works</h4> </div>
            <div className={`${styleContainer.container} ${s.content}`}>

            <Work/>
            <Work/>

            </div>

        </div>
    );
};

