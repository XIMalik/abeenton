// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageTrayMobile = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='px-10 pb-8'
    >

      <div className="pick h-fit w-fit bg-red-500">

        <SwiperSlide className='service bg-white flex flex-col w-[100%] h-[50vh] rounded-2xl bg-[#f8f8f8] overflow-hidden'>
          <div className="w-[100%] h-[50%]">
            <img src="https://framerusercontent.com/images/auOY3SUhdGwxbTIUq3Nc5zKeEds.jpg?scale-down-to=2048" alt="Image" className="h-full w-full object-cover" />
          </div>
          <div className="w-[100%] image-tray-text flex flex-col items-start justify-center p-8">
            <h1 className='font-bold text-xl'>Oil & Gas</h1>
            <p className='section-paragraph'>Exploration, production, and distribution services for petroleum products</p>
              <button className='button-text flex gap-2 items-center justify-center'>Learn more <img width="18" height="18" src="https://img.icons8.com/material-sharp/24/f58721/right--v2.png" alt="right--v2"/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='service bg-white flex flex-col w-[100%] h-[50vh] bg-[#f8f8f8] rounded-2xl overflow-hidden'>
          <div className="w-[100%] h-[50%]">
            <img src="https://framerusercontent.com/images/dxMAnTs3xluY8w9vWI5pXnvK7Q.jpg?scale-down-to=512" alt="Image" className="h-full w-full object-cover" />
          </div>
          <div className="w-[100%] image-tray-text flex flex-col items-start justify-center p-8">
            <h1 className='font-bold text-xl'>Sustainable Agriculture </h1>
            <p className='section-paragraph'> Farming solutions for a greener future: crop management, irrigation systems, and eco-friendly practices</p>
              <button className='button-text flex gap-2 items-center justify-center'>Learn more <img width="18" height="18" src="https://img.icons8.com/material-sharp/24/f58721/right--v2.png" alt="right--v2"/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='service bg-white flex flex-col w-[100%] h-[50vh] bg-[#f8f8f8] rounded-2xl overflow-hidden'>
          <div className="w-[100%] h-[50%]">
            <img src="https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" className="h-full w-full object-cover" />
          </div>
          <div className="w-[100%] image-tray-text flex flex-col items-start justify-center p-8">
            <h1 className='font-bold text-xl'>Automobiles </h1>
            <p className='section-paragraph'>Sales of premium automobiles: new and pre-owned vehicles, leasing options, and expert maintenance services</p>
              <button className='button-text flex gap-2 items-center justify-center'>Learn more <img width="18" height="18" src="https://img.icons8.com/material-sharp/24/f58721/right--v2.png" alt="right--v2"/></button>
          </div>
        </SwiperSlide>

      </div>
    </Swiper>
  );
};

export default ImageTrayMobile