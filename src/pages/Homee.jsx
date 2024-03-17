import React from 'react'
import Sidebar from '../component/home/Sidebar'
import MsgsContainer from '../component/home/MsgsContainer'

const Homee = () => {
  return (
    <div className="grid grid-cols-9 h-screen ">
<div className='col-span-2  '><Sidebar/></div>
<div className='col-span-7 '><MsgsContainer/></div>
    </div>
  )
}

export default Homee