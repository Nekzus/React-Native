import AppNavigator from './navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { init } from './db';
import { persistStore } from 'redux-persist';
import { store } from './store';

const persistor = persistStore(store);

init()
  .then(() => console.log('DB initialized'))
  .catch((err) => {
    console.log('DB fail connect');
    console.log(err.message);
  });

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </PersistGate>
  );
};

export default App;
