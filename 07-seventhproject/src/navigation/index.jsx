import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { AppState, StatusBar } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { currentLocation, loadAddress } from '../store/slices/location';
import { useDispatch, useSelector } from 'react-redux';

import LocationNavigator from './location';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkPermissionLocation } from '../store/slices/permissions';
import { primaryTheme } from '../constants/themes/primaryTheme';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
  await Font.loadAsync({
    'Qatar-Bold': require('../../assets/fonts/Qatar-Bold.ttf'),
    'Qatar-Heavy': require('../../assets/fonts/Qatar-Heavy.ttf'),
  });
};

const AppNavigator = () => {
  const { locationStatus } = useSelector((state) => state.permissions);
  const { coords } = useSelector((state) => state.locations);
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
    dispatch(currentLocation());
  }, [locationStatus]);

  useEffect(() => {
    dispatch(loadAddress());
  }, [coords]);

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
