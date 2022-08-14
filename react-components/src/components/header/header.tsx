import React from 'react';
import Nav from '../navigation/nav';
import Search from '../search/search';
import './header.css';

interface IHeaderStyle {
  stateBackgroundAboutUs: string;
}
class Header extends React.Component<IHeaderStyle> {
  constructor(props: IHeaderStyle) {
    super(props);
  }

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
