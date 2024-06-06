import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../page/Payment.css"
 import { useNavigate } from "react-router-dom";

const Payment = () => {
   const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        expirationDate: '',
        cvc: '',
        zip: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // submit hone ke baad toastify dikhane ke ley
        toast.success("Payment Done Successfully", { position: "top-center", theme: "colored" });
        // page refresh krne ke ley data submit hone ke baad
        // window.location.reload();
        navigate("/")
        localStorage.removeItem("cartProducts")
        console.log("data empty : ",localStorage)
    }
    const clearData = () => {
        setData({
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: '',
            expirationDate: '',
            cvc: '',
            zip: ''
        });
    };
    
    return (
        <div className="payment_main">
            <div className="payment_outer">
                <h2>Fill up your Personal Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="payment_inner">
                        <div className="name">
                            <input type="text" name="firstName" placeholder="First Name" value={data.firstName} onChange={handleChange} />
                            <input type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={handleChange} />
                        </div>
                        <div className="email">
                            <input type="text" name="email" placeholder="Email Address" value={data.email} onChange={handleChange} />
                        </div>
                        <div className="card_payment">
                            <input type="text" name="cardNumber" placeholder="Card Number" value={data.cardNumber} onChange={handleChange} />
                        </div>
                        <div className="card_details">
                            <input type="text" name="expirationDate" placeholder="Expiration Date" value={data.expirationDate} onChange={handleChange} />
                            <input type="text" name="cvc" placeholder="CVC" value={data.cvc} onChange={handleChange} />
                            <input type="text" name="zip" placeholder="ZIP" value={data.zip} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="payment_btn">
                        <button className="pay_btn" onClick={clearData}>Submit</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Payment;
