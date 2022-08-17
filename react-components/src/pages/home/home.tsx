import React from 'react';
import { Card, ICard } from '../../components/card/card';
import './home.css';
const testData: Array<ICard> = [
  {
    title: 'Final Fantasy 7 Remake',
    src: '',
    description: 'Soldier first class',
    id: 1,
  },
  {
    title: 'Final Fantasy 7 Rebirth',
    src: '',
    description: 'I saw youre lying there i figured it was too late',
    id: 2,
  },
  { title: 'Marvel Spider Man', src: '', description: 'Web swinging', id: 3 },
  { title: 'CyberHex', src: '', description: 'Initiate CyberHex - eliminate threat', id: 4 },
  { title: 'Scoring the End of the Earth', src: '', description: 'We not afraid', id: 5 },
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
