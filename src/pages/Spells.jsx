import React from 'react'
import Navbar from '../components/Navbar'
import Spell from '../components/Spell'


const Spells = () => {
  return (
    <div>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40 -z-50"></div>
      <Navbar/>
      <Spell/>
    </div>
  )
}

export default Spells