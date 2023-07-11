import React from "react";

import "./Achievement.css";

import { AiFillEye } from 'react-icons/ai';
import loadAchievements from "../constants/Achievements"

const Achivement = ({theme,mode}) => {
  return (
    <>
      <div className="achivement py-5" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#D6E4E5"}}>
        <div className="container py-5">
          <div className="heading" style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>ACHIEVEMENTS</div>

          <div className="contents my-5">

           
              {loadAchievements.map((object,id)=>{return (
                 <div className="item">
                   <div
                   className="block "
                   style={{
                     backgroundSize: "cover",
                     backgroundImage: `url(${object.image})`,
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                   }}
                 >
                   <div className="block-content px-2 py-5">
                     <h3>{object.name}</h3>
                     <p style={{color:theme}}>{object.content}</p>
                     <a href={object.url} target="_blank"><AiFillEye style={{fontSize:"35px"}}/></a>
   
                   </div>
   
                 </div></div>
              )})}
           
            

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivement;
