import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between text-[#ffff] pt-5 pb-1 border-b'>
      <div className='text-lg font-bold'>
      NIKITA DHAR  
      </div>
      <div>
        <nav className='flex gap-10'>
      {/* <a href="#home">Home</a> */}
      <a href="#about">About</a>
      <a href='#skills'>Skills</a>
       <a href='#experiance'>Experience</a>
      <a href='#projects'>Projects</a>
       <a href='#education'>Education</a>
      {/* <a href="#contacts">Contacts</a> */}
        </nav>
      </div>
      <div>
        <a href="#https://github.com/nikitadhar"><GitHub/></a><a href="#https://www.linkedin.com/in/nikitadhar8/" className='ml-2'><LinkedIn/></a>
      </div>
    </div>
  )
}
