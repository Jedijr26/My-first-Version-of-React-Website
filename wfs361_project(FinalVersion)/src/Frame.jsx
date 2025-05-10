import React from 'react';
import FrameOne from './components/FrameOne';
import './Index.css';
import Navbar from './components/Navbar';
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';


function Frame() {
  return (
    <div className="bg-orange-400 " style={{marginRight:"0%"}}>
      <Navbar/>
      <FrameOne/>
      <FrameTwo/>
      <FrameThree/>
      <FrameFour/>

    </div>
  )
}

export default Frame