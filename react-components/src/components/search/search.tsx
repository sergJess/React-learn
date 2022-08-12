import React from 'react';
import './search.css';
class Search extends React.Component {
  handleClick = () => {
    console.log('значение this:', this);
  };
  setBackground(): void {}
  render(): JSX.Element {
    return (
      <div className="search">
        <input type="text" className="search-input" onClick={this.handleClick} />
      </div>
    );
  }
}
export default Search;
