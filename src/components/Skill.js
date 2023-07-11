import React from 'react';

import './Skill.css';
import loadSkills from '../constants/Skills.jsx';

const SKILL = ({theme,mode}) => {
  return (
    <>
       <div className="skills py-5" id="skill" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#D6E4E5"}}>
        <div className="container py-5">
           <div className="title" style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>
               SKILL
           </div>
           <div className="tech mt-5">

            {loadSkills.map((obj,id)=>(
                <div className="item space-y-2 " key={id} >
                  <p className='text-primary w-full flex flex-row justify-center '>{obj.icon}</p>
                  <p >{obj.tech}</p>
                </div>
            ))} 
                                  
           </div>
        </div>
     </div>
    </>
  )
}

export default SKILL