import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from '../screens/Home';
import IntroScreen from '../screens/IntroScreen';

export default function MainRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='' element={<IntroScreen/>}/>
          
        </Route>
      </Routes>
  )
}
