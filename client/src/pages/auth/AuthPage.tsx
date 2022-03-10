import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import axios from 'axios'

class AuthPage extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
  }

  //generic change handler for text input fields
  changeHandler = (e) => {
    let currentName = e.target.name

    let newState = {};
    newState[currentName] = e.target.value;

    this.setState(newState)
  }

//class property syntax


render() {
  return(
    <div>
      {/* to do: _______________ */}
         <section className="login-wrapper-section">
                        <div className="header-basic">
                            <h4>Log into your account:</h4>
                        </div>

                        <div className="login-wrapper">

                            <div className="login-box">
                                <form className="loginForm" onSubmit={this.submitHandler}>
                                    <input className="loginFormInput" type='text' name='email' value={this.state.email} placeholder="Username" onChange={this.changeHandler} />
                                    <input className="loginFormInput" type='password' name='password' value={this.state.password} placeholder="Password" onChange={this.changeHandler} />
                                    <button>Log in</button>
                                </form>
                                <div>
                                    {
                                        this.state.errorMessage && <h1 className="errorMessage">{this.state.errorMessage}</h1> 
                               }
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}


}