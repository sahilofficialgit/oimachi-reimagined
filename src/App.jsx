import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import SmoothScroll from './components/SmoothScroll';

const App = () => {

  return (
    <>
      <SmoothScroll />

      <div className='h-screen w-full'>
        <Navbar />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </>
  )
}

export default App
