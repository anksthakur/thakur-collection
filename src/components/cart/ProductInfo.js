import React from 'react'
import "../../components/cart/Product.css"

const ProductInfo = () => {
  return (
    <>
     <div className="product_section">
      <div className="product_container">
        <div className="left_product">
          <img src='/b.jpg' alt='run'/>
          <div className="product_btn">
            <button className='product_btn1'>Add To Cart</button>
          </div>
        </div>
        <div className="right_product">
          <h3>Bohemian Rhapsody Attire</h3>
          <h4>Full Seleve</h4>
          <h4>Quantity 1 </h4>
          <h4>$Price  & Free Shipping</h4>
          <p className='description'>About the item : <span style={{color:'#565959',fontSize:14,fontWeight:500,letterSpacing:'0.4px'}}>Description</span></p>
        </div>
      </div>
     </div>
    </>
  )
}

export default ProductInfo
