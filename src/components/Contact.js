import React from "react";
import "./Contact.css";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {BsArrowUpCircle } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";


const Contact = ({theme,mode}) => {
  return (
    <>
      <div className="footer py-5 px-5" id="contact" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#D6E4E5"}}>
        
          <div className="contact px-5 pt-5">

            <a href="mailto:kaushandutta5@gmail.com" style={{color:theme}}>kaushandutta5@gmail.com</a>
            <br/><br/>
            
              <ul>
                <li>
                  <a href="https://m.facebook.com/100022235252926/" target="_blank"><FaFacebookF style={{width:"40px",color:"white",position:"relative",top:"3px"}}/></a>
                  
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li>
                  <a href="https://www.instagram.com/itzzz_kaushan/" target="_blank"><FaInstagram style={{width:"40px",color:"white",position:"relative",top:"3px"}}/></a>
                  
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li> <a href="https://hashnode.com/@Kaushan5409" target="_blank"><SiHashnode style={{width:"40px",color:"white",position:"relative",top:"3px"}}/></a>
                  
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li> <a href="https://youtube.com/channel/UCu91OXaNhdKQmq602V-Zblg" target="_blank"><FaYoutube style={{width:"40px",color:"white",position:"relative",top:"3px"}}/></a>
                  
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li> <a href="https://www.linkedin.com/in/kaushan-dutta-bb68b021a/" target="_blank"> <FaLinkedinIn style={{width:"40px",color:"white",position:"relative",top:"3px"}}/></a>
                
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <li> <a href="https://github.com/Kaushan-Dutta" target="_blank">{<FaGithubAlt style={{width:"40px",color:"black",position:"relative",top:"3px"}}/>}</a>
                  
                </li>
              </ul>
           
              
            <p id="copyright">©KaushanDutta 2022</p>
            <br/>
            
            <a href="#home" >
                    <BsArrowUpCircle
                      style={{
                       
                        color: theme,
                        fontSize:"70px"
                      }}
                    />
                  </a>
                  <br/>
                  <br/>
                  <br/><br/>
                  <br/>
          </div>
        </div>
     
    </>
  );
};

export default Contact;
