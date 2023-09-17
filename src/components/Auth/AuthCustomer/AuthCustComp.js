import classes from '../Form.module.scss'
import React, { useState } from 'react';
import axios from 'axios';

const AuthCustComp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email:'',
    tin: '',
    adress: '',
    type_products: '',
    password: '',
    role: 'Company'
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post('http://192.168.45.232:8000/api/v1/register/owner/', formData)
      console.log(res.data.token);

      setFormData({
        name: '',
        username: '',
        email: '',
        tin: '',
        adress: '',
        type_productss: '',
        password: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input onChange={handleInputChange} name="name" id="name" type="text" />
      <label htmlFor="username">Username</label>
      <input onChange={handleInputChange} name="username" id="username" type="text" />
      <label htmlFor="tin">TIN</label>
      <input onChange={handleInputChange} name="tin" id="tin" type="text" />
      <label htmlFor="phone">Phone</label>
      <input onChange={handleInputChange} name="phone" id="phone" type="text" />
      <label htmlFor="password">Password</label>
      <input onChange={handleInputChange} name="password" id="password" type="password" />
      <button className={classes.submit}>Submit</button>
    </form>
  );
}

export default AuthCustComp;
