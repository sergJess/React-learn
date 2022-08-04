import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  redner(): JSX.Element {
    return <header className="header"></header>;
  }
}
export default Header;
