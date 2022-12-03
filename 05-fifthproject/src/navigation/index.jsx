import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import TabNavigator from './tabs';
import { primaryTheme } from '../constants/themes/primaryTheme';

const AppNavigator = ({ layout }) => {
  return (
    <SafeAreaProvider onLayout={layout}>
      <StatusBar backgroundColor="#400219" />
      <NavigationContainer theme={primaryTheme}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
