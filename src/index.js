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

// if (module.hot) {
//   module.hot.accept('./components', () => {
//     setTimeout(render, 0);
//   });
// }

render();


// window.onload = () => {
//   ReactDOM.render(
//     <Component />,
//     document.querySelector('#container')
//   );
// };
