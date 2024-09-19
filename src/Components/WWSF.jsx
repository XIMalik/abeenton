import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import shake from '/public/hand-shake.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const WWSF = () => {
    return (
        <div className='relative flex flex-col lg:flex-row items-center text-white h-fit lg:h-[70vh] bg-[#f8f8f8]'>
            <div className="parallax bg-black/60 absolute inset-0"></div>
            <div className="bg-black/60 absolute inset-0"></div>
            <div className="hero-content z-10 flex flex-col h-[50%] lg:h-[100%] w-[100%] lg:w-[50%] items-start p-[60px] md:p-[120px] justify-center">
                <h1 className='section-title-light text-white'>What we stand for</h1>
                <p className='section-paragraph-light text-white'>
                At Abeenton, we're guided by a set of core values that shape our decisions, actions and relationships</p>
                <button className='button-text-wh text-white flex gap-2 items-center justify-center'>Learn more <img width="18" height="18" src="https://img.icons8.com/material-sharp/18/FFFFFF/right--v2.png" alt="right--v2"/></button>
            </div>
            <div className="image z-10 flex flex-wrap lg:flex-row w-[100%] p-10 h-[50%] lg:h-[100%] lg:w-[50%] justify-center items-center gap-[50px]">
                <div className="value flex flex-col hover:transform-x-[100px] gap-5 justify-center items-center">
                    <div className="border-white border-[3px] h-[100px] w-[100px] flex justify-center items-center rounded-full">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/handshake--v1.png" alt="handshake--v1"/>                                         </div>
                    <span className='font-bold'>Sustainability</span>
                </div>
                <div className="value flex flex-col gap-5 justify-center items-center">
                    <div className="border-white border-[3px] h-[100px] w-[100px] flex justify-center items-center rounded-full">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/star.png" alt="star"/>
                    </div>                    
                    <span className='font-bold'>Innovation</span>
                </div>
                <div className="value flex flex-col gap-5 justify-center items-center">
                    <div className="border-white border-[3px] h-[100px] w-[100px] flex justify-center items-center rounded-full">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/weight-care.png" alt="weight-care"/>                                                                </div>
                    <span className='font-bold'>Integrity</span>
                </div>
            </div>
        </div>
    );
};

export default WWSF;
