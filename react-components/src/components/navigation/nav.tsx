import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../../pages/home';
import Page404 from '../../pages/404/404';
import ABoutUsPage from '../../pages/about-us/about-us';
import './nav.css';

class Nav extends React.Component {
  render(): JSX.Element {
    return (
      <nav className="nav">
        <Link to="./"> Home</Link>
        <Link to="about-us"> About US</Link>
        <BrowserRouter>
          <Routes>
            <Route path="./" element={<HomePage />} />
            <Route path="about-us" element={<ABoutUsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </nav>
    );
  }
}
export default Nav;
