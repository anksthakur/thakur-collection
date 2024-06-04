import React from 'react'
import "../../components/buynow/Buynow.css"
import Options from './Options'
import Subtotal from './Subtotal'

const Buynow = () => {
  return (
    <>
      <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            </div>
        </div>
        <div className="item_container">
                <img src='/r.jpg' alt='run'/>
                <div className="item_details">
                    <h3>Title : </h3>
                    <h3>Type : </h3>
                    <h3 className='item_price'> Price : $Price</h3>
                  <Options/>
                </div>
            </div>
            <Subtotal/>
      </div>
    </>
  )
}

export default Buynow
