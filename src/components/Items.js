import React, { useContext } from "react";
import { cartContext } from "../page/Cart";

// props.currItem na type krna pde uhske ley destructur kiya
const Items = ({id,title,type,price,image,quantity}) => {
// useContext
const {removeItem,increment,decrement} = useContext(cartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={image} alt="br" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{type}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fa-solid fa-lg fa-minus minus" onClick={()=>decrement(id)}
            style={{ color: "black" }}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            className="fa-solid fa-lg fa-plus add" onClick={()=>increment(id)}
            style={{ color: "black" }}
          ></i>
        </div>
        <div className="price">
          <h3>${price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fa-solid fa-lg fa-trash-alt remove" onClick={()=>removeItem(id)}
            style={{ color: "red" }}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
