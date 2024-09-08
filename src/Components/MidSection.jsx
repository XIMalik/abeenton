import React from 'react'
import ImageTray from './ImageTray'
import Amenities from './Amenities'
import ThreeD from './ThreeD'
import FAQs from './FAQs'
import Pricing from './Pricing'

const MidSection = () => {
  return (
    <div className="w-[100%] p-10 flex flex-col gap-12">    
        <div className='the_mission flex flex-col items-center text-center w-[100%] justify-center'>
            <h1 className='subtitle text-white/50 mb-5'>The mission</h1>
            <span className='w-full md:w-[80%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, deserunt dignissimos aspernatur voluptatibus natus ipsum alias aliquam incidunt eius, laudantium odio reiciendis pariatur earum minus, deleniti vel doloremque quis repudiandae ipsa harum accusantium facilis? Ad saepe mollitia commodi vero impedit possimus reprehenderit delectus, est nulla beatae voluptatem deleniti magni quae.
            </span>
        </div>
        <div className="thrre_d py-10 border-t-[0.5px] border-white/10 py-10">
            <ThreeD/>
        </div>
        <div id='amenities' className="amenities flex flex-col justify-center items-center py-10 border-t-[0.5px] border-white/10 py-10">
            <h1 className='subtitle'>Amenities at Tranquil Plains</h1>
            <Amenities/>
        </div>
        <div id='pricing' className="plot-pricing py-10 flex items-center flex-col border-t-[0.5px] border-white/10 py-10">
        <h1 className='subtitle'>Plot Pricing</h1>
            <Pricing/>
        </div>
        <div className='timeline flex flex-col items-center justify-center gap-5 border-t-[0.5px] border-white/10 py-10'>
            <h1 className='subtitle'>Timeline of ownership</h1>
            <div className="flex flex-col-reverse mb-10">
                <span className='text-center    '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, porro dolore voluptatem soluta dolor adipisci und</span>
                <ul className="desktop-tl timeline hidden md:flex items-center justify-center">
    <li>
        <div className="timeline-start timeline-box">Inquire</div>
        <div className="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd" />
        </svg>
        </div>
        <hr />
    </li>
    <li>
        <hr />
        <div className="timeline-start timeline-box">Purchase</div>
        <div className="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd" />
        </svg>
        </div>
        <hr />
    </li>
    <li>
        <hr />
        <div className="timeline-start timeline-box">Provide Security information</div>
        <div className="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd" />
        </svg>
        </div>
        <hr />
    </li>
    <li>
        <hr />
        <div className="timeline-start timeline-box">iPhone</div>
        <div className="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd" />
        </svg>
        </div>
        <hr />
    </li>
    <li>
        <hr />
        <div className="timeline-start timeline-box">Apple Watch</div>
        <div className="timeline-middle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd" />
        </svg>
        </div>
    </li>
            </ul>
            <ul className="mobile-tl timeline timeline-vertical items-center justify-center flex mb-10 md:hidden">
  <li>
    <div className="timeline-start timeline-box">First Macintosh computer</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box">iPod</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box">Apple Watch</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  </li>
            </ul>
            </div>
            <div className='flex gap-5 items-center w-full justify-center'>

                    <button className="btn btn-primary">Reserve a plot today</button>
                    </div>
        </div>
        <div className="first_set_of_images flex flex-col justify-center items-center py-10 border-t-[0.5px] border-white/10 py-10">
        <h1 className='subtitle'>The Gallery</h1>
            <ImageTray/>
        </div>
        {/* <div className="py-10 border-t-[0.5px] border-white/10">
            <FAQs/>
        </div> */}
    </div>
  )
}

export default MidSection