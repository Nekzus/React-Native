import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ShopNavigator from './shop';
import { primaryTheme } from '../constants/themes/primaryTheme';

const AppNavigator = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer theme={primaryTheme}>
        <ShopNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
