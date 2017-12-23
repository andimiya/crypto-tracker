import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import StripeCheckout from 'react-stripe-checkout';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  onToken = (token) => {
    var body = JSON.stringify(token);
    console.log(body, 'body');
    fetch(`http://localhost:8080/api/charge`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body
    })
    .then(response => {
      console.log(response, 'response');
      response.json()
      .then(data => {
        console.log(data.email, 'success!!');
      })
    })
    .catch(err => {
      console.log(err, '');
    })
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-container-inner">
          <LoginForm />
          <StripeCheckout
            name="Yao Prototype"
            ComponentClass="div"
            amount={500}
            currency="USD"
            stripeKey={"pk_test_WKKOcNp3UeOVsbuPLwntJ2ec"}
            locale="en"
            alipay
            bitcoin
            token={this.onToken}
            >
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
