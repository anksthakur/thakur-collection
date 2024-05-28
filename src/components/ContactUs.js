import React from 'react'

const ContactUs = () => {
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
            <div className='name'><input type='text' placeholder='Name'/></div>
            <div className='email'><input type='text' placeholder='Email'/></div>
            <div className='message'><textarea type='text' placeholder='Message'/></div>
            <div className='send-btn'><button>Send</button></div></div>
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
              <hr  className='hr'/>
              <div className="right-2">
                <div className="address">
                  <h5>Address</h5>
                  <h3>221 Sector 55 , Phase-1 Mohali 160055</h3>
                </div>
              </div>
              <hr  className='hr'/>
              <div className="right-3">
                <div className="follow">
                  <h4>Follow Us : </h4>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </>
  )
}

export default ContactUs
