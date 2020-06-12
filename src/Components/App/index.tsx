import React from 'react';
import './index.scss';
import { Header } from '../Header';
import { Main } from '../Main';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}