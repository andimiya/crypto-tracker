import React from 'react';
import { Link } from 'react-router-dom';
const hamburger = require('../assets/hamburger.svg');

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.collapseNav = this.collapseNav.bind(this);

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

  render() {
    return (
      <div className={this.state.navClass}>
        <div className="name-container">
          <Link to="/" onClick={this.collapseNav}>
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
            <Link to="/login" onClick={this.collapseNav}>
              <p>Login</p>
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
