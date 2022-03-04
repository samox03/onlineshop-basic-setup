import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div>
      <div className="header-basic">
        <h4>Log into your account:</h4>
      </div>
      <div className="login-box">
        <form className="loginForm">
          <input className="loginFormInput" type='text' name='email' placeholder="Username" />
          <input className="loginFormInput" type='password' name='password' placeholder="Password" />
          <button>Log in</button>
        </form>
    </div>
    </div>
  )
}