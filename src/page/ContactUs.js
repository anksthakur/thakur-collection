import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useNavigate} from 'react-router-dom';

const ContactUs = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  //params
  // const data = { name: 'John', age: 30 };

const navigate = useNavigate();

 const handleSubmit = (e) =>{
  e.preventDefault();
  console.log('Name :', name);
  console.log('Email :', email);
  console.log('Message :', message);
  navigate(`/admin?name=${name}&email=${email}&msg=${message}`);
 }
 
 

  return (
    
    <>
    
      <div className='contact-us'>
        <div className='wrapper'>
          <div className='contact'>
            <div className='con'>
              <h5>GET IN TOUCH WITH THAKUR</h5>
              <h3>We Value The Connection With Our Community And Are Here To Assist In Any Way We Can. Feel Free To Reach Out Through The Following Channels:</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='form'>
        <div className='wrapper'>
          <div className='form-detail'>
          
            <div className="form-left">
            <form onSubmit={handleSubmit}>
                <div className='name'>
                  <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className='email'>
                  <input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='message'>
                  <textarea
                    type='text'
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className='send-btn'>
                  <button  type='submit'>Send</button>
                </div>
                {/* <Link to={`/admin/${data.name}/${data.age}`}>Admin Page</Link> */}
              </form>
              </div>
            <div className="form-right">
              <div className='right-1'>
                <div className="contact-phone">
                  <h5>Phone</h5>
                  <h3>(+91)6239732448</h3>
                </div>
                <div className="contact-email">
                  <h5>Email</h5>
                  <h3>anksthakur7@gmail.com</h3>
                </div>
              </div>
              <hr className='hr' />
              <div className="right-2">
                <div className="address">
                  <h5>Address</h5>
                  <h3>221 Sector 55 , Phase-1 Mohali 160055</h3>
                </div>
              </div>
              <hr className='hr' />
              <div className="right-3">
                <div className="follow">
                  <h4>Follow Us : </h4>
                </div>
                <div className='icons'>
               <NavLink to="https://www.instagram.com/thakuranks/"><i className="fa-brands fa-instagram" style={{color: "orange"}}></i></NavLink>
                <NavLink to="https://www.facebook.com/anks.thakur.3"><i className="fa-brands fa-facebook" style={{color: "blue"}}></i></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
