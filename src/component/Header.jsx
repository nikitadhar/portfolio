import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between text-[#ffff] pt-5 pb-1 border-b'>
      <div className='text-lg font-bold'>
      NIKITA DHAR  
      </div>
      <div>
        <nav className='flex gap-10'>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href='#projects'>Projects</a>
      <a href="#contacts">Contacts</a>
        </nav>
      </div>
    </div>
  )
}
