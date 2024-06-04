import React from 'react'
import {  useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admin = () => {
    const [data] = useSearchParams();
    // const { name, age } = props.match.params;
  return (
    <>
    <Navbar/>
    <div>
        <h1>Admin</h1>
      <h1> Name : {data.get('name')} </h1>
       <h1> Email: {data.get('email')}</h1>
       <h1> Message : {data.get('msg')} </h1>
       {/* params */}
       {/* <p>Name: {name}</p>
      <p>Age: {age}</p> */}
    </div>
    <Footer/>
    </>
  )
}

export default Admin
