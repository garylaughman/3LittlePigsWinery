import React from 'react';
import ReactDOM from 'react-dom';
import GaryBlock from './components/GaryBlock';
import Game from './components/tutorial/Game';
import styles from './index.css';

const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
      <div>
        <GaryBlock />
        <hr />
        <Game />
      </div>,
    rootEl
  );
};

render();
