import React from 'react'
import bg from '/public/bg1.jpg'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import MidSection from '../Components/MidSection'
import Location from '../Components/Location'
import Footer from '../Components/Footer'
import FAQs from '../Components/FAQs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <MidSection/>
        <FAQs/>
        <Location/>
        <Footer/>
    </div>
  )
}

export default Home