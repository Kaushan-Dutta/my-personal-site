import React,{useEffect,useState,CSSProperties} from 'react';
import Navbar from './Navbar.js';
import ClockLoader from "react-spinners/ClockLoader";


const Caller = () => {
    const [loading,setLoading]=useState(false);
    const override = {
        display: "block",
        margin: "20% auto",
        borderColor: "red",
      };
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
           setLoading(false)
        },4000)
    },[]);
  return (
    <div className='caller'>
    {  loading?
      
      <ClockLoader


        color={'#36d7b7'}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:
      <Navbar/>
    }
    </div>
  )
}

export default Caller