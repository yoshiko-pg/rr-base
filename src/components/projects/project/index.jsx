import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

const RootComponent = () => {
  const {hello} = store.getState();

  return (
    <Provider store={store}>
      <h1>{hello}</h1>
    </Provider>
  );
};

export default RootComponent;
