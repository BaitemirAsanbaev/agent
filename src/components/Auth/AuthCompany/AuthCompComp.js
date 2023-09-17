import React, { useState } from 'react';
import axios from 'axios';

import classes from '../Form.module.scss';

const AuthCompComp = () => {
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
      await axios.post('http://192.168.45.232:8000/api/v1/register/company/', formData)
      // console.log(formData);
      // localStorage.setItem("token", {role:'company'})

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
    <label htmlFor="email">Email</label>
    <input onChange={handleInputChange} name="email" id="email" type="email" />
    <label  htmlFor="tin">TIN</label>
    <input onChange={handleInputChange} name="tin" id="tin" type="text" />
    <label htmlFor="adress">Adress</label>
    <input onChange={handleInputChange} name="adress" id="adress" type="text" />
    <label htmlFor="type_products">Your Products</label>
    <div className={classes.type}>
      <label htmlFor="food">Food</label>
      <input  onChange={handleInputChange}name="type_products" id="food" value={'Food'} type="radio" />
      <label htmlFor="household">Household</label>
      <input onChange={handleInputChange} name="type_products" id="household" value={'Household'} type="radio" />
    </div>
    <label htmlFor="password">Password</label>
    <input onChange={handleInputChange} name="password" id="password" type="password" />
    <button className={classes.submit}>Submit</button>
  </form>
  );
};

export default AuthCompComp;
