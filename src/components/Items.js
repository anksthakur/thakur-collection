import React from "react";

const Items = () => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src="b.jpg" alt="br" />
        </div>
        <div className="title">
          <h2>title</h2>
          <p>type</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fa-solid fa-lg fa-minus minus"
            style={{ color: "black" }}
          ></i>
          <input type="text" placeholder="2" />
          <i
            className="fa-solid fa-lg fa-plus add"
            style={{ color: "black" }}
          ></i>
        </div>
        <div className="price">
          <h3>$2000</h3>
        </div>
        <div className="remove-item">
          <i
            className="fa-solid fa-lg fa-trash-alt remove"
            style={{ color: "red" }}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
