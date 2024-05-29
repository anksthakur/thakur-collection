import React from 'react'
import {  useSearchParams } from 'react-router-dom'

const Admin = () => {
    const [data] = useSearchParams();
    // const { name, age } = props.match.params;
  return (
    <>
    <div>
        <h1>Admin</h1>
      <h1> Name : {data.get('name')} </h1>
       <h1> Email: {data.get('email')}</h1>
       <h1> Message : {data.get('msg')} </h1>
       {/* params */}
       {/* <p>Name: {name}</p>
      <p>Age: {age}</p> */}
    </div>
    </>
  )
}

export default Admin
