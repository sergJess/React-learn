import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './nav.css';

// interface NavProps {
//   element: HTMLElement;
// }
class Nav extends React.Component {
  field: string;
  click: Function;
  constructor(props = {}) {
    super(props);
    this.field = 'Jess';
    this.click = this.onClickLink.bind(this);
  }
  onClickLink(): void {
    console.log(this.field);
  }
  render(): JSX.Element {
    return (
      <nav onClick={this.click()} className="nav">
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

// function clickToAboutUs(element: HTMLElement): void {
//   const elem = element;
//   const parent = elem.parentNode;
//   console.log(parent);
//   if (parent) {
//     const header = parent.parentNode as HTMLElement;
//     header.classList.add('header-about-us');
//   }
// }
