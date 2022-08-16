import React from 'react';
import { Card, ICard } from '../components/card/card';
const testData: Array<ICard> = [
  { title: 'First Look', src: '', description: 'It is what lying behind', id: 1 },
  { title: 'Second Look', src: '', description: 'It is what so far away', id: 1 },
];
class HomePage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="home-page">
        <h1>Hello Jessie</h1>
        <div className="home-page-cards">
          {testData.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                id={item.id}
                src={item.src}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
