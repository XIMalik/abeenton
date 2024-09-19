import React from 'react'

const Split = () => {
    return (
        <div>
            {/* <div className='flex flex-col items-center text-center justify-center py-[100px] w-full'>
                    <span className='sub text-[#1C2451] font-bold text-xs'>BIO</span>
                    <h1 className='section-title'>We are Abeenton</h1>
                    <p className='section-paragraph max-w-[80vw]'>Abeenton Oil and Gas is a leading provider of innovative solutions and expert services to the oil and gas industry. 
                    </p>
                </div> */}
            <div
                className="h-fit md:h-[75vh] flex flex-col md:flex-row-reverse mt-[100px]">
                <div className=' w-full md:h-full md:w-[50%] h-[35vh] bg-yellow-700 overflow-hidden'>
                    <img src="https://framerusercontent.com/images/auOY3SUhdGwxbTIUq3Nc5zKeEds.jpg?scale-down-to=2048" className='h-full w-full object-cover hover:scale-[102%] ease-in duration-500' alt="" />
                </div>
                <div className='w-full md:w-[50%] flex flex-col items-start justify-center p-[60px] md:p-[80px] lg:p-[120px]'>
                    <span className='sub text-[#1C2451] font-regular text-xs'>ABOUT US</span>
                    <h1 className='section-title'>Providing Quality <br /> Basic Needs</h1>
                    <p className='section-paragraph'>Abeenton and Sons Nigeria limited is a family owned company founded by Mr Abiodun Fehintola is a diversified solutions provider, delivering innovative Energy, Sustainable Agriculture and Automotive Solutions. We empower growth, reduce environmental impact, and foster long-term partnerships</p>
                    <button className='button-text mt-5 flex gap-2 items-center justify-center'>Read more <img width="18" height="18" src="https://img.icons8.com/material-sharp/24/f58721/right--v2.png" alt="right--v2"/></button>
                    </div>
            </div>
        </div>
    )
}

export default Split