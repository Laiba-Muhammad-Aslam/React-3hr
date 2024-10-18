import React from 'react'
import NavbarPart2 from './NabarPart2'

function Navbar() {
  return (
    <nav className='flex py-5 px-10 items-center justify-between bg-black text-white'>
    <h2 className='text-3xl'>ABC</h2>
    <NavbarPart2 />
  </nav>
  )
}

export default Navbar
