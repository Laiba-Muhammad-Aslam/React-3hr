// Traditional way 
// import React from 'react'
// const Navbar = () => {
//   return (
//     <nav className='flex justify-around bg-slate-800 text-white py-4'>
//         <div className="logo font-bold">Facebook</div>
//         <ul className='flex gap-6'>
//             <a href='/'><li>Home</li></a>
//             <a href='/about'><li>About</li></a>
//             <a href='/contact'><li>Contact</li></a>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react'
import Link from 'next/link' 

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
        <div className="logo font-bold">Facebook</div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar