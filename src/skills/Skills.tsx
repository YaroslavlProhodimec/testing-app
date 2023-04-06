import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
export const Skills = () => {
    return (
        <div className={s.skillsMainContainer}>
       <div className= {`${styleContainer.container} ${s.skillsContainer} `  }>
           <h2 className={s.title}>Skills</h2>

           <div className={s.skills}>
               <Skill title={'JS'} description={'Hello my name is YaroslavdaDDDDD DDDDD DDDDDD'}/>
               <Skill title={'CSS'} description={'Hello my name is YaroslavDDDDDD DDDDDDD DDDDDD'}/>
               <Skill title={'REACT'} description={'Hello my name is YaroslavDDDDD DDDDD DDDD DDDDD DDDDDD'}/>
           </div>
       </div>
        </div>
    );
};

