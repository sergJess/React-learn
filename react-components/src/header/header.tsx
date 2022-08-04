import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <Router>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="./about-us">
            About Us
          </Link>
        </Router>
      </header>
    );
  }
}
export default Header;
