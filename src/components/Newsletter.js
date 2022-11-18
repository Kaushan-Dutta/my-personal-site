import React from "react";
import Image from '../images/newsletter.png';
import './Newsletter.css'
const Newsletter = ({theme,mode}) => {
  return (
    <>
      <div className="newsletter py-5" style={{backgroundColor:mode=='0'?"rgb(50, 49, 49)":"#F1F1F1"}}>
        <div className="container px-5 py-5" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#D6E4E5"}}>
          <div className="content px-2">
            <h1 style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>Sign Up my Newsletter</h1>
            <br/>
            <p style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>
              SignUp my newsletter and become more closer to my network by receiving time-to-time update about my projects and news regarding hackathon            </p>
            <button style={{backgroundColor:theme}}><a href="/error" target="_blank">Subscribe Newsletter</a></button>
          </div>
          <div className="image px-2 mb-5">
            <img src={Image} width="350px" height="200px"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
