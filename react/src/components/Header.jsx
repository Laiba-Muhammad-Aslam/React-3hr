import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='py-7 px-10 bg-emerald-700 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>Laiba <input type="text" name="" id="" placeholder='Search' className='mx-4 py-1 px-3 text-black' /></h2>
      <div className='flex gap-10 text-lg underline'>
        {/* <a className='text-xl underline' href="/">Home</a>
        <a className='text-xl underline' href="/about">About</a>
        <a className='text-xl underline' href="/contact">Contact</a>
        <a className='text-xl underline' href="/product">Product</a> */}

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}
