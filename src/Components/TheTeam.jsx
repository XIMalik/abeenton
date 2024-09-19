import React from 'react';

const TheTeam = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-[50px] py-[100px] pb-[120px] px-10'>
      <div className="w-[100%] lg:w-[50%] flex flex-col justify-center h-full">
        <h1 className='section-title text-center'>The Leadership at Abeenton</h1>
        {/* <span className='section-paragraph text-center'>
          At Abeenton, we pride ourselves on the years of experience we hold between us, ensuring we all move toward the same goal as one.
        </span> */}
      </div>

      <div className="profiles flex flex-wrap md:flex-row justify-evenly items-center gap-[70px]">
        <div className="profile flex flex-col items-center gap-2">
          <div className="image lg:w-[130px] lg:h-[130px] w-[150px] h-[150px] overflow-hidden rounded-full">
            <img src="https://images.pexels.com/photos/1182238/pexels-photo-1182238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" className='object-cover h-full w-full hover:scale-[102%] ease-in duration-500'/>
          </div>
          <div className="info text-center text-[#1C2451] flex flex-col gap-2">
            <h2 className='font-bold'>John Doe</h2>
            <p className='text-sm'>Founder/CEO</p>
          </div>
        </div>
        <div className="profile flex flex-col items-center gap-2">
          <div className="image lg:w-[130px] lg:h-[130px] w-[150px] h-[150px] overflow-hidden rounded-full">
            <img src="https://images.pexels.com/photos/3287016/pexels-photo-3287016.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='object-cover h-full w-full hover:scale-[102%] ease-in duration-500'/>
          </div>
          <div className="info text-center text-[#1C2451] flex flex-col gap-2">
            <h2 className='font-bold'>Vanessa Doe</h2>
            <p className='text-sm'>Foundeer/CTO</p>
          </div>
        </div>
        <div className="profile flex flex-col items-center gap-2">
          <div className="image lg:w-[130px] lg:h-[130px] w-[150px] h-[150px] overflow-hidden rounded-full">
            <img src="https://images.pexels.com/photos/3206082/pexels-photo-3206082.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='object-cover h-full w-full hover:scale-[102%] ease-in duration-500'/>
          </div>
          <div className="info text-center text-[#1C2451] flex flex-col gap-2">
            <h2 className='font-bold'>John Oduka</h2>
            <p className='text-sm'>Founder/COO</p>
          </div>
        </div>
        <div className="profile flex flex-col items-center gap-2">
          <div className="image lg:w-[130px] lg:h-[130px] w-[150px] h-[150px] overflow-hidden rounded-full">
            <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className='object-cover h-full w-full hover:scale-[102%] ease-in duration-500'/>
          </div>
          <div className="info text-center text-[#1C2451] flex flex-col gap-2">
            <h2 className='font-bold'>Jane Oduka</h2>
            <p className='text-sm'>Founder/COO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTeam;
