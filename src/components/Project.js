import React from 'react';

import './Project.css';
import { BsGithub } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import loadContent from './loadContent';


const Project = ({theme,mode}) => {
  return (
    <>
      <div className='project py-5' id="activities" style={{backgroundColor:mode=='0'?"rgb(50, 49, 49)":"#F1F1F1"}}>
        <div className='container py-5'>
         <div className='header' style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>
              PROJECTS
         </div>

         <div className='project-block mt-5' >
         {
          loadContent.map((object,key)=>{
            return(<>
            <div className='item'>
             
                <div className='block' style={{backgroundSize:"cover",backgroundImage:`url(${object.image})`,backgroundPosition:"center",backgroundRepeat:"no-repeat" }}>
                    <div className='block-content'>
                        <a href={object.git} target="_blank"><BsGithub style={{fontSize:"40px"}}/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href={object.site} target="_blank" style={{display:object.site?"":"none"}}><AiFillEye style={{fontSize:"35px"}}/></a>
                    </div>
                </div>
                <br/>
                <div className='item-name '>
                  <h6><b style={{color:theme}}>{object.name}</b></h6>
                  <p style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>{"< "+object.components+" />"}</p>
                </div>
            </div></>)
          })
         }
           


           


         
</div>
         </div>
      </div>  
    </>
  )
}

export default Project