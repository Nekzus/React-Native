import * as Location from 'expo-location';

import { akPermissionLocation, ckPermissionLocation } from './permissionsSlice';

import { Alert } from 'react-native';

export const askPermissionLocation = () => {
  return async (dispatch) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    dispatch(akPermissionLocation(status));
    if (status !== 'granted') {
      Alert.alert('Permiso insuficientes', 'Necesitamos permisos para usar la localizacion', [
        { text: 'Ok' },
      ]);
    }
  };
};

export const checkPermissionLocation = () => {
  return async (dispatch) => {
    const { status } = await Location.getForegroundPermissionsAsync();
    dispatch(ckPermissionLocation(status));
  };
};
