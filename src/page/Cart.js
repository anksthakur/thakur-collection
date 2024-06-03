import React, { createContext, useEffect, useReducer} from "react";
import CartContext from "../components/CartContext";
import thakur from '../thakur'
import { reducer } from "../components/Reducer";

// useContext context create kiya apna
export const cartContext = createContext();
//useReducer
// initialState m humne data define kiya aur ye data state ke pass hai
const initialState = {
 item: thakur,
 totalAmount : 0,
 totalItem:0,
};
const Cart = () => {
 const [state,dispatch] = useReducer(reducer,initialState);
 // to delete item from cart
 const removeItem = (id)=>{
  return dispatch({
    type:"REMOVE_ITEM",
    payload:id,
  })
 }
 // increment
 const increment = (id)=>{
  return dispatch({
        type:"INCREMENT",
        payload:id,
  })
 }
 // decrement
 const decrement = (id)=>{
  return dispatch({
        type:"DECREMENT",
        payload:id,
  })
 }
 // total amount
 //useEffect
useEffect(()=>{
  dispatch({
    type:"GET_TOTAL"
  })
  console.log("total");
},[state.item]);

  return (
// context m CartContext m wrap kiya taki hume prop drilling na krni pde aur as a prop pass kiya value={thakur.js ko}
// thakur file ko global pass kiya
    // <cartContext.Provider value={thakur}>
    //useReducer
    <cartContext.Provider value={{...state,removeItem,increment,decrement}}>
      <CartContext/>
      </cartContext.Provider>
   
  );
};

export default Cart;
