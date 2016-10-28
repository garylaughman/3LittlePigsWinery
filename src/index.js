import React from 'react';
import ReactDOM from 'react-dom';
import Component from './components/Component';

window.onload = () => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#container')
  );
};
