import React, { Component } from 'react';
import { $ } from 'jquery';
import Notice from './Notice';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      sentStatus: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const credentials = {
        userName: this.state.emailAddress,
        password: this.state.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    $.post(options)
      .then(data => {
        if (data.statusCode === 200) {
          this.setState({
            sentStatus: 'sent',
            emailAddress: '',
            firstName: '',
            lastName: ''
          });
        } else {
          this.setState({
            sentStatus: 'error',
          });
        }
      })
      .catch(() => this.setState({ sentStatus: 'error' }));
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}
            className="form-inline">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              className="form-control"
            />
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Password"
              name="password"
              value={this.state.password}
              className="form-control"
            />
            <input
              className="btn btn-primary"
              type="submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
