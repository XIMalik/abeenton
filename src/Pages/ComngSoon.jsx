import React from 'react'
import logo from '/public/ab-logo-col.png'

const ComngSoon = () => {
  return (
    <div className='flex justify-center bg-gradient-to-br py-10 from-white to-blue-200/90 flex-col items-center h-screen'> 
        <img src={logo} alt="" className='scale-[40%]' />
        <h1 className='text-black absolute bottom-10  text-sm italic'>Website is under development</h1>
    </div>
  )
}

export default ComngSoon