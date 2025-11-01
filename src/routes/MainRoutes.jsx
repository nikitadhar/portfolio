import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from '../screens/Home';
import IntroScreen from '../screens/IntroScreen';
import Portfolio from '../screens/Portfolio';
import Header from '../component/Header';
import HeroSection from '../component/HeroSection';
import About from '../component/About';
import Projects from '../component/Projects';
import Contacts from '../component/Contacts';
import Skills from '../component/Skills';
import Education from '../component/Education';

export default function MainRoutes() {
  return (
    <div className='max-w-4xl w-full mx-auto px-2 shadow-xl h-full'>
    <Header/>
    {/* <HeroSection/> */}
    <About/>
    <Skills/>
    <Projects/>
    {/* <Contacts/>  */}
    <Education/>
    </div>
      // <Routes>
      //   <Route path="/" element={<Portfolio />}>
      //     <Route path='' element={<IntroScreen/>}/>
          
      //   </Route>
      // </Routes>
  )
}
