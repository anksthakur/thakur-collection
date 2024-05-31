import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from "../thakur"
import Banner from '../components/Banner';

const Home = () => {
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(4); 

  const getApiData = async () => {
    try {
      // const res = await axios.get("./thakur.json");
      setData(Data); 
      // console.log(Data)
    } catch (error) {
      setIsError(error.message);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  const showMore = () => {
    setShow(prevItemsToShow => prevItemsToShow + 4);
  }

  return (
    <>
    <Banner img={'back.jpg'} text1={'CASUAL & EVERYDAY'} text2={'Effortlessly Blend Comfort & Style!'} text3={'Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures'} pathName={'/'}/>
      <div className='card-text'><h1>Most Popular</h1></div>
      <div className='cards'>
        {data.length > 0 ? data.slice(0, show).map((item, index) => (
          <div key={index} className='card'>
            <img src={item.image} alt={item.title} />
            <h5>{item.type}</h5>
            <NavLink className="nav-card" to={`/product/${index + 1}`}>{item.title}</NavLink>
            <h4>${item.price}</h4>
          </div>
        )) : (
          <div>Loading...</div>
        )}
        
      </div>
      {isError && <div>Error: {isError}</div>}
      <div className='show-btn'>
        <button onClick={showMore}>Show More</button>
      </div>
    </>
  )
}

export default Home
