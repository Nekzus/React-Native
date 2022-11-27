import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ShopNavigator from './shop';
import { StatusBar } from 'react-native';
import { primaryTheme } from '../constants/themes/primaryTheme';

const AppNavigator = () => {
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
