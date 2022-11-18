import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';


const Home = ({theme,mode}) => {
    console.log(theme,mode);
    return (
        <>
            <div className='home-page' id="home" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#D6E4E5"}}>
                <div className='container'>
                    <div className='portfolio' style={{color:theme}}>STUDENT&nbsp;&nbsp;<span><Typewriter
                                        words={["DEVELOPER","FREELANCER","BLOGGER","DESIGNER"]}
                                        loop
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={150}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                        
                                    /></span></div>
                    <h2 style={{color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>{"< "}<span > A college student trying to explore out BLOCKCHAIN & WEB DEVELOPMENT<span>{" />"}</span></span></h2>
                    <br/>
                    <a href={require('../documents/Resume.pdf')} target="_blank"><button style={{borderColor:theme,color:mode=='0'?"#fff":"rgb(37, 36, 36)"}}>MY&nbsp;&nbsp;RESUME</button></a>
                </div>
            </div>
        </>
    )
}

export default Home