import React from 'react'
import ImageTray from './ImageTray'
import ImageTrayMobile from './ImageTrayMobile'
import bb from '/public/boosters.jpg'

const Services = () => {
  return (
    <div className='py-[115px] bg-[#f8f8f8]'>
      <div
        className=" flex">
        <div className='flex flex-col items-center text-center justify-center pb-[40px] w-full'>
          <span className='sub text-[#1C2451] font-regular text-xs'>SERVICES</span>
          <h1 className='section-title max-w-[80%]'>Our Corporate Assistance</h1>
          {/* <p className='section-paragraph max-w-[80vw]'>We are a diversified and fully integrated conglomerate. <br /> The Group’s interests span a range of sectors in Nigeria and across Africa.</p> */}
          <p className='section-paragraph max-w-[80vw]'>Abeenton offers a diverse range of services to fuel your success:</p>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ImageTray />
      </div>
      <div className="flex lg:hidden">
        <ImageTrayMobile />
      </div>
    </div>
  )
}

export default Services