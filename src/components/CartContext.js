import React, { useContext } from 'react'
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "../components/Items";
import { cartContext } from '../page/Cart';

const CartContext = () => {
//useContext ko yha use kiya
 const {item,totalItem} = useContext(cartContext)
  return (
    <>
      <div className="cart">
        <div className="wrapper">
          <div className="cart-parent">
            <h1>Your Cart items</h1>
            <hr />
          </div>
          <section className="main-cart-section">
            <h2>Shopping Cart</h2>
            <p className="total-items">
              You have <span className="total-items-count">{totalItem}</span> items in
              cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars style={{ height: 300 }}>
                  {
                    item.map((currItem)=>{
                      return <Items key={currItem.id}{...currItem}/>
                    })
                  }
                  
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                Cart Total : <span>$20000</span>
              </h3>
              <button>Checkout</button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default CartContext
