import React from 'react';
import Header from '../header/header';

class HomePage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="home-page">
        <Header />;
      </div>
    );
  }
}

export default HomePage;
