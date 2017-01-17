import React from 'react';
import ReactDOM from 'react-dom';
import GaryBlock from './components/GaryBlock';

const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <GaryBlock />,
    rootEl
  );
};

render();
