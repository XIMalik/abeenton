import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import MidSection from '../Components/MidSection'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <MidSection/>
        <Footer/>
    </div>
  )
}

export default Home