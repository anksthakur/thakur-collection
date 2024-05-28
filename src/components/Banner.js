import React from 'react'
import { NavLink } from 'react-router-dom'

const Banner = ({ pathName }) => {
    console.log(pathName);
    return (
        <>
            <div className='back-img'>
                <img 
                    src={ 
                        pathName === "/" ? "back.jpg" : 
                        pathName === "/about-us" ? "watch.jpg" : 
                        pathName === "/contact-us" ? "seleve.jpg" : 
                        pathName === "/shop" ? "shop.jpg" : 
                        "default.jpg"
                    } 
                    alt='back' 
                />
            </div>
            <div className='banner'>
                <h5>{pathName === "/" ? "CASUAL & EVERYDAY" : ""}</h5>
                <div className='banner-h1'>
                    <h1>
                        { 
                          pathName === "/" ? "Effortlessly Blend Comfort & Style!" : 
                          pathName === "/about-us" ? "About Us" : 
                          pathName === "/contact-us" ? "Contact Us" : 
                          pathName === "/shop" ? "Shop" : ""
                        }
                    </h1>
                </div>
                <div className='banner-p'>
                    <p>
                        { 
                          pathName === "/" ? "Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures" : ""
                        }
                    </p>
                </div>
                {pathName === "/" && ( 
                    <NavLink to="/shop" className="nav-view">VIEW COLLECTION</NavLink>
                )}
            </div>
        </>
    )
}

export default Banner
