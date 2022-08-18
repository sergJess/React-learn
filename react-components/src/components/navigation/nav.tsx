import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
  click: Function;
  constructor(props = {}) {
    super(props);
    this.click = this.onClickLink.bind(this);
  }
  onClickLink(e: React.MouseEvent<HTMLElement>): void {
    const target = e.target as HTMLElement;
    if (target.classList.contains('nav-link')) {
      const parent = target.parentElement;
      if (parent) {
        parent.querySelectorAll('.nav-link').forEach((item) => {
          item.classList.remove('nav-link-active');
        });
      }
      target.classList.add('nav-link-active');
    }
  }
  render(): JSX.Element {
    return (
      <nav className="nav">
        <Link onClick={this.onClickLink} className="nav-link" to="/">
          Home
        </Link>
        <Link onClick={this.onClickLink} className="nav-link" to="/about-us">
          About US
        </Link>
        <Outlet />
      </nav>
    );
  }
}
export default Nav;
