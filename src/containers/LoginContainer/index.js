import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class LoginContainer extends Component {

  render() {
    return (
      <div className="login-container">
        <div className="login-container-inner">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginContainer;
