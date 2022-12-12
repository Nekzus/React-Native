import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import TabNavigator from './tabs';
import { appReady } from '../store/actions';
import { primaryTheme } from '../constants/themes/primaryTheme';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
  await Font.loadAsync({
    'Qatar-Bold': require('../../assets/fonts/Qatar-Bold.ttf'),
    'Qatar-Heavy': require('../../assets/fonts/Qatar-Heavy.ttf'),
  });
};

const AppNavigator = () => {
  const dispatch = useDispatch();
  const appIsReady = useSelector((state) => state.group.appReady);

  useEffect(() => {
    const prepare = async () => {
      try {
        await fetchFonts();
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (error) {
        console.warn(error);
      } finally {
        dispatch(appReady());
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
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar backgroundColor="#400219" />
      <NavigationContainer theme={primaryTheme}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
