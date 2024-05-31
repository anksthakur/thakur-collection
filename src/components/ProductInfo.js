import React from 'react'

const ProductInfo = ({id}) => {
  return (
    <>
    <div className='product'>
        <div className='wrapper'>
            <div className='product-parent'>
                <div className="left-product">
                    <h1>Left</h1>
                </div>
                <div className="right-product">
                    <div className="right-pro-1">
                        <h5>Type</h5>
                        <h5>Title</h5>
                    </div>
                    <div className="right-pro-2">
                        <div className="price"><h3>Price</h3>
                        </div>
                        <div className="btn-inc-dec">
                            <button>-</button><span>value</span><button>+</button>
                        </div>
                        <div className='add-cart'>
                          <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductInfo
