import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import ABoutUsPage from '../pages/about-us/about-us';
import Page404 from '../pages/404/404';
import Header from '../components/header/header';
class App extends React.Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us" element={<ABoutUsPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
