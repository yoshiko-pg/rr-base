import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components';

window.addEventListener('load', () => {
  const container = document.querySelector('#app');
  ReactDOM.render(<Root />, container);
});

