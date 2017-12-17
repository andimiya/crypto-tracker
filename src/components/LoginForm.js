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
    const options = {
      // url: COINMARKET_API,
      data: JSON.stringify({
        emailAddress: this.state.emailAddress,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
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
          {(() => {
            switch (this.state.sentStatus) {
              case 'sent':
                return (
                  <Notice
                    status="Your message has been sent! We'll contact you shortly"
                    statusClass="success-message"
                    noticeContainerClass="notice-container-success"
                  />
                );
              case 'error':
                return (
                  <Notice
                    status="An error occured, please try again"
                    noticeContainerClass="notice-container-error"
                    statusClass="error-message"
                  />
                );
              default:
                return '';
            }
          })()}
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
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                className="form-control"
              />
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
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
      </div>
    );
  }
}

export default LoginForm;