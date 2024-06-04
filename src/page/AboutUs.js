import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <Banner img={"seleve.jpg"} text2={"About Us"}/>
    <div className='main'>
    <div className='wrapper'>
    <div className='content'>
      <div className='heading-1'><h1>From Vision To Vogue: The Birth Of FemmeWardrobe</h1></div>
      <div className='heading-2' ><p>OUR STORY</p>
      <h4>Our Journey Began With A Simple Yet Powerful Vision - To Redefine The Way Women Experience Fashion.</h4>
      <h5>Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance</h5>
      </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs
