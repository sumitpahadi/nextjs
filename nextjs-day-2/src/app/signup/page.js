"use client";
import React, { useState } from 'react';
import './RegisterStyles.css'; // Your CSS file for styling
import axios from 'axios';

const RegisterPage = () => {
    const [message,setmessage]=useState()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: 0,
    password: '',
    
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let temp={
        name:formData.username,
        email:formData.email,
        mobile:formData.mobile,
        password:formData.password
    }
    try {
        const result = await axios.post("/api/user", temp); // Assuming you have an API route at /api/task
        console.log("data is", result.data);
        setmessage(result.data.body.message)
       
      
      } catch (error) {
        console.log(error);
      }
    console.log(formData);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <p style={{color:"red",textAlign:"center"}}>{message}</p>

       
        <button className='button1' type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
