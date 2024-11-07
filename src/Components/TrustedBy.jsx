import React from 'react'
import ImageTray from './ImageTray'
import ImageTrayMobile from './ImageTrayMobile'
import bb from '/public/boosters.jpg'
import car1 from '/public/car1.svg'
import car2 from '/public/car2.png'
import car3 from '/public/car3.png'
import car4 from '/public/car4.svg'
import car5 from '/public/car5.svg'
import car6 from '/public/car6.svg'
import car7 from '/public/car7.svg'

const TrustedBy = () => {
  return (
    <div className='py-[60px] flex flex-col items-center justify-center'>
      <div className="">
        <div className='flex flex-col items-center text-center justify-center pb-[40px] w-full'>
          <h1 className='section-title'>Our trusted partners</h1>
          {/* <p className='section-paragraph max-w-[80vw]'>We are a diversified and fully integrated conglomerate. The Group’s interests span a range of sectors in Nigeria and across Africa.</p> */}
        </div>
      </div>
      <div className="logos relative overflow-hidden w-[90vw] h-[150px]">
      <div
        className="flex px-5 items-center justify-center gap-12 w-[200%] animate-scroll"
        style={{
          animation: "scroll 25s linear infinite",
        }}
      >
        {/* First set of logos */}
        <img src={car1} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car2} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car3} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car4} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car5} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car6} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car7} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car1} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car2} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car3} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car4} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car5} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car6} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car7} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car1} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car2} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car3} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car4} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car5} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car6} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car7} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car2} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car3} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car4} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car5} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car6} className='w-[100px] h-auto' alt="Logo 1" />
        <img src={car7} className='w-[100px] h-auto' alt="Logo 1" />
        
      </div>
    </div>
      
    </div>
  )
}

export default TrustedBy