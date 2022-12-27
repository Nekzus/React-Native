import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { AppState, StatusBar } from 'react-native';
import React, { useCallback, useEffect } from 'react';

import LocationNavigator from './location';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissionLocation } from '../store/slices/permissions';
import { primaryTheme } from '../constants/themes/primaryTheme';
import { useDispatch } from 'react-redux';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
  await Font.loadAsync({
    'Qatar-Bold': require('../../assets/fonts/Qatar-Bold.ttf'),
    'Qatar-Heavy': require('../../assets/fonts/Qatar-Heavy.ttf'),
  });
};

const AppNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subs = AppState.addEventListener('change', (state) => {
      if (state !== 'active') return;
      dispatch(checkPermissionLocation());
    });
    return () => {
      subs.remove();
    };
  }, []);

  useEffect(() => {
    const prepare = async () => {
      try {
        await fetchFonts();
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (error) {
        console.warn(error);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar backgroundColor="#400219" />
      <NavigationContainer theme={primaryTheme}>
        <LocationNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
