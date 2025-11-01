import { Avatar, Typography } from '@mui/material'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex  justify-between py-12 h-screen  items-center bg-[#1e2e3d]' id="home">
      <div className='text-[#ffff]'>
        <Typography variant="h2" component="h2" className='font-bold w-full'>Hi, I'm Nikita Dhar</Typography>
        <Typography className="text-[#6a9ac3]">FULL STACK DEVELOPER</Typography>

        <Typography  marginTop={2}> A passionate full stack developer based in India</Typography>
        <br/>
        <a href="#projects" className="bg-[#3f3da0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10  ">
   View My Work
</a>
      </div>
      <div>
        <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 150, height: 150, marginRight:10 }}
/>
      </div>
    </div>
  )
}
