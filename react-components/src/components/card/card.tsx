import React from 'react';
import './card.css';
type cardTitle = string;
type cardImgSrc = string;
type cardDescription = string;
type cardId = number;
export interface ICard {
  title: cardTitle;
  src: cardImgSrc;
  description: cardDescription;
  id: cardId;
}
export class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <div className="card">
        <h3 className="card-title">{this.props.title}</h3>
        <div className="card-image-inner">
          <img src={this.props.src} />
        </div>
        <p className="card-description">{this.props.description}</p>
      </div>
    );
  }
}
