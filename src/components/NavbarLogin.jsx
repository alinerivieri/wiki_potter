import React from 'react'
import Logo from '../assets/Wiki-Potter.svg'

const Navbar = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-4 text-white'>
            <div className='flex justify-between items-center'>
                <img className='z-10 mx-auto' src={Logo} alt="/"/>
            </div>
    </div>
  )
}

export default Navbar