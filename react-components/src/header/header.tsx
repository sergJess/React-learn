import React from 'react';
import Nav from '../components/navigation/nav';
import './header.css';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <Nav />
      </header>
    );
  }
}
export default Header;
