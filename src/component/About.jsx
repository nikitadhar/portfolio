import { Avatar, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
  //   <div className='text-[#ffff] h-screen snap-start' id="about">
  //      <Typography variant="h4" component="h4">ABOUT ME</Typography>
  //      <Typography className='pt-2 text-justify'>
  //      An ambitious individual who is good at problem-solving and programming, emphasizing writing clean and maintainable code. I am experienced with data structures/algorithms and designing optimal solutions, and I aspire to make a career in software engineering focusing on full-stack development.
  //      </Typography>
  //   </div>
   <div className='flex  justify-between py-12 h-screen  items-center bg-[#1e2e3d]' id="home">
        <div className='text-[#ffff] flex-1'>
          <Typography variant="h3" component="h3" className='font-bold w-full'>Hi, I'm Nikita Dhar</Typography>
          <Typography className="text-[#6a9ac3]">FULL STACK DEVELOPER</Typography>
  
          <Typography  marginTop={2}> A passionate full stack developer based in India</Typography>
        <Typography className='text-justify'>I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.</Typography>
          <br/>
          <div className='flex'>
          <a href="#projects" className="bg-[#3f3da0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
     View My Work
  </a>
  <a href="#" className="bg-[#3f3da0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2  ">
    Download CV
  </a></div>
        </div>
        <div className='flex-1 flex justify-center'>
          <Avatar
    alt="Remy Sharp"
    src="/static/images/avatar/1.jpg"
    sx={{ width: 150, height: 150 }}
  />
        </div>
      </div>
  )
}
