import React, {  useEffect, useState } from 'react';
import Data from "../thakur";


const ProductInfo = ({ id }) => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(1);

  const getData = async () => {
    const product = Data.find((item) => item.id == id);
    setData(product);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const incDec = () => {
    if (item > 1) {
      setItem(item - 1);
    }
  }

  const addCart = () => {
    console.log(data)
    addCart(item);

  }

  return (
    <>
      <div className="item-details">
        <div className="wrapper">
          <div className="item-details-inner">
            <div className="left-part">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="right-part">
              <h6>{data.type}</h6>
              <h5>{data.title}</h5>
              <h4>
                ${data.price}<span>& Free Shipping</span>
              </h4>
              <p>{data.description}</p>
              <hr />
              <div className="quantity">
                <div className="quantity-amount">
                  <input type="button" onClick={incDec} value="-" />
                  <input type="text" value={item} readOnly />
                  <input type="button" onClick={() => { setItem(item + 1) }} value="+" />
                </div>
                <div className="Add-to-cart">
                  <input type="button" onClick={addCart} value="Add to Cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
