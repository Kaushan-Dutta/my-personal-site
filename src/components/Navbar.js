import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";

import { FaLaptopCode } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";


import { IoMdContact } from "react-icons/io";

import { BsFillSunFill } from "react-icons/bs";

import { BsFillMoonFill } from "react-icons/bs";
import "./Navbar.css";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Skill from "./Skill.js";
import Project from "./Project.js";
import Achivement from "./Achievement";
import Contact from "./Contact";
import Newsletter from "./Newsletter.js";


const Navbar = () => {
  const [mode, setMode] = useState('0');
  const [theme,setTheme]=useState('#d5b02a');
 
  return (
    <>
      
    

     <Home theme={theme} mode={mode}/>

      <div className="navbar" style={{backgroundColor:mode=='0'?"rgb(37, 36, 36)":"#F1F1F1"}}>
        <div className="container">
          <ul>
            <li>
              <a href="#home">
                <AiFillHome
                  style={{
                    width: "20",
                    height: "20",
                    position: "relative",
                    top: "3px",
                  }}
                />
                <span>&nbsp;&nbsp;HOME</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#skill">
                <FaLaptopCode
                  style={{
                    width: "20",
                    height: "20",
                    position: "relative",
                    top: "4px",
                  }}
                />
                <span>&nbsp;&nbsp;SKILL</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#activities">
                <BsFillTrophyFill
                  style={{
                    width: "15",
                    height: "15",
                    position: "relative",
                    top: "2px",
                  }}
                />
                <span>&nbsp;&nbsp;ACTIVITIES</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#contact">
                <IoMdContact
                  style={{
                    width: "20",
                    height: "20",
                    position: "relative",
                    top: "4px",
                  }}
                />
                <span>&nbsp;&nbsp;CONTACT</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <input
                type="color"
                onChange={(event) => {
                  console.log(event.target.value);
                  setTheme(event.target.value);
                }} value={theme}
              />
              <span>&nbsp;&nbsp;THEME</span>
            </li>
            <li>|</li>
            <li
              onClick={() => {
                if (mode == '0') {
                  setMode('1');
                } else {
                  setMode('0');
                }
              }}
            >
              {mode == '1' ? (
                <BsFillSunFill
                  style={{
                    width: "20",
                    height: "20",
                    position: "relative",
                    top: "4px",
                  }}
                />
              ) : (
                <BsFillMoonFill
                  style={{
                    width: "20",
                    height: "20",
                    position: "relative",
                    top: "4px",
                  }}
                />
              )}
              <span>&nbsp;&nbsp;MODE</span>
            </li>
          </ul>
        </div>
      </div>
      <Profile theme={theme} mode={mode}/>
      <Skill theme={theme} mode={mode}/>
      <Project theme={theme} mode={mode}/>
      <Achivement theme={theme} mode={mode}/>
 
      <Newsletter theme={theme} mode={mode}/>
      <Contact theme={theme} mode={mode}/>

    
      
      
    </>
  );
};

export default Navbar;
