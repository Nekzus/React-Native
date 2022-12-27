import * as Location from 'expo-location';

import { coordsLocation } from './locationsSlice';

export const currentLocation = () => {
  return async (dispatch, setState) => {
    const {
      permissions: { locationStatus },
    } = setState();
    if (locationStatus !== 'granted') return;
    const location = await Location.getCurrentPositionAsync({
      timeout: 100,
    });
    const { latitude, longitude } = location.coords;
    dispatch(coordsLocation({ lat: latitude, lng: longitude }));
  };
};
