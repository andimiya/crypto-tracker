import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const hamburger = require('../assets/hamburger.svg');

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.collapseNav = this.collapseNav.bind(this);
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);

    this.state = {
      navClass: 'navbar-container'
    };
  }

  handleClick(){
    if (this.state.navClass === 'navbar-container') {
      this.setState ({ navClass: 'responsive-container' })
    } else {
      this.setState ({ navClass: 'navbar-container' })
    }
  }

  collapseNav(){
    this.setState ({ navClass: 'navbar-container'})
  }
  
  logoutCurrentUser = () => {
    this.props
      .logoutUserSession()
      .then(() => {
        this.props.history.push('/homepage')
      })
      .catch(err => {});
  };

  render() {
    return (
      <div className={this.state.navClass}>
        <div className="name-container">
          <Link to="/homepage" onClick={this.collapseNav}>
            <p>Crypto Tracker</p>
          </Link>
        </div>
        <div className="menu-item-container">
          <div className="menu-item">
            <Link to="/transactions" onClick={this.collapseNav}>
              <p>Transactions</p>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/new-investments" onClick={this.collapseNav}>
              <p>Add New</p>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/login" onClick={this.collapseNav}>
              <p>Login</p>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/create-account" onClick={this.collapseNav}>
              <p>New Account</p>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/" onClick={this.logoutCurrentUser}>
              <p>Log Out</p>
            </Link>
          </div>
        </div>
        <div className="hamburger">
          <div onClick={this.handleClick}>
            <img src={hamburger} alt="Work, Resume, Contact" width="40px" onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
