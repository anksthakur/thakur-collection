// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from "../thakur"

const Home = () => {
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      // const res = await axios.get("./thakur.json");
      setData(Data); 
      // console.log(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  }

  useEffect(() => {
    getApiData();
  },[]);

  return (
    <>
      <div className='card-text'><h1>Most Popular</h1></div>
      <div className='cards'>
        {data.length > 0 ? data.map((item, index) => (
          <div key={index} className='card'>
            <img src={item.image} alt={item.title} />
            <h5>{item.type}</h5>
            <NavLink className="nav-card" to={`/card${index + 1}`}>{item.title}</NavLink>
            <h4>$ {item.price}</h4>
          </div>
        )) : (
          <div>Loading...</div>
        )}
      </div>
      {isError && <div>Error: {isError}</div>}
    </>
  )
}

export default Home
