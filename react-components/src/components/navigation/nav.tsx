import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../header/header';
import './nav.css';

// interface NavProps {
//   element: HTMLElement;
// }
class Nav extends React.Component {
  // constructor(props: NavProps) {
  //   super(props);
  // }
  render(): JSX.Element {
    return (
      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link onClick={() => headerLog(<Header></Header>)} className="nav-link" to="/about-us">
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

function headerLog(el: JSX.Element) {
  console.log(el);
}
