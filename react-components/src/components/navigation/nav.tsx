import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
  render(): JSX.Element {
    return (
      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about-us">
          About US
        </Link>
        <Outlet />
      </nav>
    );
  }
}
export default Nav;
