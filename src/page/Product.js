import React from 'react'
import ProductInfo from '../components/ProductInfo';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';




const Product = () => {
  let { id } = useParams();
  //console.log('id :',id)
  return (
    <>
     <Navbar/>
    <ProductInfo id={id}/>
    </>
  )
}

export default Product;
