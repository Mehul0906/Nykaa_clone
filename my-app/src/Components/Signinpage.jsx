import React, { useState } from 'react';
import '../styles/Signinpage.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Signinpage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input className='sign-first-input'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input className='sign-first-input'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className='sign-btn-3' type="submit">Sign In</button>
             <p style={{textAlign:"center",marginTop:"20px",fontSize:"14px"}}>Or Sign Up Using</p>
             <div className='d-flex justify-content-center'>
                 <div style={{padding:"10px"}}>
                    <h3><FcGoogle /></h3>
                 </div>
                 <div style={{padding:"10px"}}>
                    <h3><FaFacebook /></h3>
                 </div>
                 <div style={{padding:"10px"}}>
                    <h3><FaTwitter /></h3>
                 </div>
             </div>
        </form>
    );
};

export default Signinpage;
