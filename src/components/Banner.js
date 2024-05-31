import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = ({ pathName, img, text1, text2 ,text3 }) => {
    return (
        <>
            <div className='back-img' style={{backgroundImage: `url(${img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat' ,backgroundSize:'cover'}}>
            <div className='banner'>
                {/* <h5>{pathName === "/" ? "CASUAL & EVERYDAY" : ""}</h5> */}
                <div className='banner-p'>
                <p>{text1}</p>
                </div>
                <div className='banner-h1'>
                <h1>{text2}</h1> 
                </div>
                <div className='banner-p2'>
                    <p>{text3}</p>
                </div>
                
                {pathName === "/" && ( 
                    <NavLink to="/shop" className="nav-view">VIEW COLLECTION</NavLink>
                )}
            </div>
            </div>
        </>
    );
};

export default Banner;
