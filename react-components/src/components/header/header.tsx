import React from 'react';
import Nav from '../navigation/nav';
import Search from '../search/search';
import './header.css';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <Nav />
        <Search />
      </header>
    );
  }
}
export default Header;
