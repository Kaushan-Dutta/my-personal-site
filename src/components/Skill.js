import React from 'react';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';

import { SiMongodb } from 'react-icons/si';
import { SiNodedotjs} from 'react-icons/si';
import { SiSolidity } from 'react-icons/si';
import { FaHardHat } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { SiPython } from 'react-icons/si';
 import { SiFirebase } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import {SiVercel } from 'react-icons/si';
import { DiHeroku } from 'react-icons/di';
import { SiNetlify} from 'react-icons/si';
import { SiGooglefonts } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
/*import { SiHtml5 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si'; */
import './Skill.css';

const SKILL = ({theme,mode}) => {
  return (
    <>
       <div className="skills py-5" id="skill" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#D6E4E5"}}>
        <div className="container py-5">
           <div className="title" style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>
               SKILL
           </div>
           <div className="tech mt-5">
                <div className="item">
                  <SiHtml5 style={{fontSize:"50px",color:theme}}/>
                  <p>HTML 5</p>
                </div>
                <div className="item">
                  <SiCss3 style={{fontSize:"50px",color:theme}}/>
                  <p>CSS</p>
                </div>
                <div className="item">
                  <SiJavascript style={{fontSize:"50px",color:theme}}/>
                  <p>JAVASCRIPT</p>
                </div>
                <div className="item">
                  <SiReact style={{fontSize:"50px",color:theme}}/>
                  <p>REACT</p>
                </div>
                <div className="item">
                  <SiMongodb style={{fontSize:"50px",color:theme}}/>
                  <p>MONGODB</p>
                </div>
                <div className="item">
                  <SiNodedotjs style={{fontSize:"50px",color:theme}}/>
                  <p>NODE JS</p>
                </div>
                <div className="item">
                  <SiSolidity style={{fontSize:"50px",color:theme}}/>
                  <p>SOLIDITY</p>
                </div>
                <div className="item">
                  <FaHardHat style={{fontSize:"50px",color:theme}}/>
                  <p>HARDHAT</p>
                </div>
                <div className="item">
                  <DiJava style={{fontSize:"50px",color:theme}}/>
                  <p>JAVA</p>
                </div>
                <div className="item">
                  <  SiPython style={{fontSize:"50px",color:theme}}/>
                  <p>PYTHON</p>
                </div>
                <div className="item">
                  < SiFirebase style={{fontSize:"50px",color:theme}}/>
                  <p>FIREBASE</p>
                </div>
                <div className="item">
                  < BsGithub style={{fontSize:"50px",color:theme}}/>
                  <p>GIT HUB</p>
                </div>
                <div className="item">
                  < SiVercel style={{fontSize:"50px",color:theme}}/>
                  <p>VERCEL</p>
                </div>
                <div className="item">
                  < DiHeroku style={{fontSize:"50px",color:theme}}/>
                  <p>HEROKU</p>
                </div>
                <div className="item">
                  < SiNetlify style={{fontSize:"50px",color:theme}}/>
                  <p>NETLIFY</p>
                </div>
                <div className="item">
                  <  SiGooglefonts  style={{fontSize:"40px",color:theme}}/>
                  <p>GOOGLE FONTS</p>
                </div>
                <div className="item">
                  < SiBootstrap style={{fontSize:"50px",color:theme}}/>
                  <p>BOOTSTRAP</p>
                </div>
           </div>
        </div>
     </div>
    </>
  )
}

export default SKILL