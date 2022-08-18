import React from 'react';
import './search.css';
class Search extends React.Component {
  inputClasses: string;
  constructor(props = {}) {
    super(props);
    this.state = { value: '' };
    this.inputEvent.bind(this);
    this.handleClick.bind(this);
    this.inputClasses = 'search-input  search-loop-visible';
  }
  handleClick = () => {
    console.log('значение this:', this);
  };
  inputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      this.setState({ value: `${event.target.value}` });
      if (!event.target.value.length) {
        event.target.classList.remove('search-loop-invisible');
        event.target.classList.add('search-loop-visible');
      } else {
        event.target.classList.remove('search-loop-visible');
        event.target.classList.add('search-loop-invisible');
      }
    }
  };
  render(): JSX.Element {
    return (
      <div className="search">
        <input
          type="text"
          className={this.inputClasses}
          onClick={this.handleClick}
          onChange={this.inputEvent}
        />
      </div>
    );
  }
}
export default Search;
