import React from 'react';
import './search.css';
class Search extends React.Component {
  constructor(props = {}) {
    super(props);
    this.state = { value: '' };
  }
  handleClick = () => {
    console.log('значение this:', this);
  };
  inputEvent = (value: string) => {
    this.setState({ value: `${value}` });
  };
  setBackground(): void {}
  render(): JSX.Element {
    return (
      <div className="search">
        <input
          type="text"
          className="search-input"
          onClick={this.handleClick}
          onInput={this.inputEvent.bind(this, e:React.ChangeEvent<HTMLInputElement>)}
        />
      </div>
    );
  }
}
export default Search;
