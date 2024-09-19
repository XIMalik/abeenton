import React from 'react'
// import wired from 'public/wired.jpg'
const ContactUs = () => {
    return (
        <div className='flex justify-center items-center pb-[60px]'>
            <div
            className="hero h-[50vh] bg-[#f6f6f6] w-[85vw] rounded-[30px] overflow-hidden"
            style={{
                backgroundImage: "url(https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}>
            <div className="w-full h-full bg-black/50"></div>
            <div className="hero-content text-[#fffff] text-center flex flex-col">
                <div className="">
                    <h1 className="mb-5 text-5xl section-title-light font-bold">Reach us</h1>
                    {/* <p className="mb-5">
                        Via any of the below avenues, reach us and make an enquiry today
                    </p> */}
                </div>
                <div className='flex gap-5 items-center w-full justify-center'>
                <a href="https://www.instagram.com/abeentonandsonsnigltd?igsh=Mjlib2w5ZnIwd29z">
                <button className="px-6 py-3 rounded-md bg-[#F58721] hover:bg-[#F58728] text-sm flex gap-3 justify-center items-center text-white">Contact us <img width="18" height="18" src="https://img.icons8.com/ios-filled/20/FFFFFF/chevron-right.png" alt="chevron-right"/></button>
                </a>
                </div>
                {/* <div className="icons flex gap-4">
                    <a href="#">
                        <img width="40" height="40" src="https://img.icons8.com/officel/80/whatsapp.png" alt="whatsapp" />
                    </a>
                    <a href="#">
                        <img width="40" height="40" src="https://img.icons8.com/color/40/gmail-new.png" alt="gmail-new" />
                    </a>
                    <a href="#">
                        <img width="40" height="40" src="https://img.icons8.com/fluency/100/instagram-new.png" alt="instagram-new" />      
                    </a>
                </div> */}
            </div>
        </div></div>
    )
}

export default ContactUs