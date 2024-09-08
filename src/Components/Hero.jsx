import React from 'react'
import bg from '/public/bg1.jpg'
import { useRef } from 'react'


const Hero = () => {
    return (
        <div><div
            className="hero min-h-[80vh]"
            style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1603084612976-5464d52d4e67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <h1 className="hero_title">Tranquil Plains</h1>
                    <p className="mb-5 ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='flex gap-5 items-center w-full justify-center'>

                        <button className="btn box">Download our brochure</button>
                        <button className="btn box btn-primary">Reserve a plot today</button>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Hero