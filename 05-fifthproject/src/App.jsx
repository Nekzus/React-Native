import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useCallback, useEffect, useState } from 'react';

import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
  await Font.loadAsync({
    'Qatar-Bold': require('../assets/fonts/Qatar-Bold.ttf'),
    'Qatar-Heavy': require('../assets/fonts/Qatar-Heavy.ttf'),
  });
};

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await fetchFonts();
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigator layout={onLayoutRootView} />
    </Provider>
  );
};

export default App;
