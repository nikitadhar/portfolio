import { Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <div className='text-[#ffff] h-screen snap-start' id="about">
       <Typography variant="h4" component="h4">ABOUT ME</Typography>
       <Typography className='pt-2 text-justify'>
       An ambitious individual who is good at problem-solving and programming, emphasizing writing clean and maintainable code. I am experienced with data structures/algorithms and designing optimal solutions, and I aspire to make a career in software engineering focusing on full-stack development.
       </Typography>
    </div>
  )
}
