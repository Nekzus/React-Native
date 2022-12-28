import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import React from 'react';
import { init } from './db';
import { store } from './store';

init()
  .then(() => console.log('DB initialized'))
  .catch((err) => {
    console.log('DB fail connect');
    console.log(err.message);
  });

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
