import React from 'react';
import FrameOne from './components/FrameOne';
import './Index.css';
import Navbar from './components/Navbar';
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';


function Frame() {
  return (
    <div>
      <Navbar/>
      <FrameOne/>
      <FrameTwo/>
      <FrameThree/>

    </div>
  )
}

export default Frame