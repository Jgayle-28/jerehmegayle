import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LeftNav from './LeftNav';

class UserNav extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu
    });
  };

  render() {
    return (
      <header>
        <LeftNav />
        {/* Menu Button */}
        <div className="menu-btn-container">
          <div
            onClick={this.toggleMenu}
            className={'menu-btn ' + (this.state.showMenu ? 'close' : '')}
          >
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
        </div>

        <nav className={'menu ' + (this.state.showMenu ? 'show' : '')}>
          {/* Left / Top side menu */}
          <div
            className={'menu-branding ' + (this.state.showMenu ? 'show' : '')}
          >
            <div
              className={'menu-logo ' + (this.state.showMenu ? 'show' : '')}
            />
          </div>

          {/* Right / Bottom side  */}
          <ul className={'menu-nav ' + (this.state.showMenu ? 'show' : '')}>
            <li className={'nav-item ' + (this.state.showMenu ? 'show' : '')}>
              <Link to="/" className="nav-link" onClick={this.toggleMenu}>
                Home
              </Link>
            </li>
            <li className={'nav-item ' + (this.state.showMenu ? 'show' : '')}>
              <Link
                to="/portfolio"
                className="nav-link"
                onClick={this.toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className={'nav-item ' + (this.state.showMenu ? 'show' : '')}>
              <Link to="/about" className="nav-link" onClick={this.toggleMenu}>
                About
              </Link>
            </li>
            <li className={'nav-item ' + (this.state.showMenu ? 'show' : '')}>
              <Link
                to="/contact"
                className="nav-link"
                onClick={this.toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default UserNav;
