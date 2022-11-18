import React from 'react';
import Gif from '../images/error.gif';
import './Error.css';


const Error = () => {
  return (
    <>
      <div className='error'>
        <div className='container px-5 py-5'>
            <div className='error-display px-3'>
                <img src={Gif}/>
            </div>    
            <div className='error-redirect px-3'>
               <h1>404</h1>
               <p>The page you are looking for is either missing or temporarily unavailable</p>
               <button><a href="/">Go Home</a></button>
            </div>
        </div>  
      </div> 
    </>
  )
}

export default Error