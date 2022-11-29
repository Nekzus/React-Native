import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import WorldcupNavigator from './worldcup';
import { primaryTheme } from '../constants/themes/primaryTheme';

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#400219" />
      <NavigationContainer theme={primaryTheme}>
        <WorldcupNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
