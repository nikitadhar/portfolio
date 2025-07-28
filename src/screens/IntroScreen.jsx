import React from 'react'
import ReactRoundedImage from "react-rounded-image"
import nikipic from '../assests/nikipic.jpeg'
import { Typography } from '@mui/material'

export default function IntroScreen() {
  return (
    <div className='flex flex-col  flex-1 justify-center '>
      <div className='flex justify-center '>
      <div className='flex flex-col flex-1 text-start justify-start'>
    
    <p>Hello, I am </p>
    <Typography className='text-xl'>Nikita Dhar</Typography>
    <Typography className=''>A full stack develop from India</Typography>
    <Typography>"Full Stack Developer by profession | Passionate coder & problem solver 💻 | from front-end finesse to back-end brilliance! #CodeQueen #TechEnthusiast"</Typography>
      </div>
      <div className='flex-1'>
      <ReactRoundedImage
          image={nikipic}
          roundedColor="#321124"
          imageWidth="300"
          imageHeight="300"
          roundedSize="1"
          // borderRadius="70"
        />
      </div>
    </div>
    </div>
  )
}
