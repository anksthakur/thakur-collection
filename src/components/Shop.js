import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Data from "../thakur"

const Shop = () => {
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(4); 

  const getApiData = async () => {
    try {
      //console.log(Data)
      setData(Data); 
    } catch (error) {
      setIsError(error.message);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  const showAll = () => {
    setShow(data.length);
  }

  const highToLow = () => {
    const sortData = [...data].sort((a, b) => b.price - a.price);
    //console.log(sortData)
    setData(sortData);
  }

  const lowToHigh = () => {
    const sortData = [...data].sort((a, b) => a.price - b.price);
    //console.log(sortData)
    setData(sortData);
  }
  
  return (
    <>
    <div className='sorting'>
      <div className='wrapper'>
        <div className='showall'>
          <div className='show'>{show >= data.length ? `Showing all ${data.length} results` : `Showing ${show} of ${data.length} results`}</div>
          <div className='show-dropdown'>
            <select onChange={(e) => {
              if ( e.target.value === "highToLow") highToLow();
              else if ( e.target.value === "lowToHigh") lowToHigh();
            }}>
              <option value="">Default sorting</option>
              <option value="highToLow">Sort by price: High to Low</option>
              <option value="lowToHigh">Sort by price: Low to High</option>
            </select>
          </div>
        </div>
      </div>
      <div className='cards'>
        {data.length > 0 ? data.slice(0, show).map((item, index) => (
          <div key={index} className='card'>
            <img src={item.image} alt={item.title} />
            <h5>{item.type}</h5>
            <NavLink className="nav-card" to={`/card${index + 1}`}>{item.title}</NavLink>
            <h4>${item.price}</h4>
          </div>
        )) : (
          <div>Loading...</div>
        )}
      </div>
      {isError && <div>Error: {isError}</div>}
      <div className='show-btn'>
        {show < data.length && <button onClick={showAll}>Show All</button>}
      </div>
      </div>
    </>
  )
}

export default Shop
