import * as Location from 'expo-location';

import { addressLocation, coordsLocation, historyLocations } from './locationsSlice';
import { fetchAddress, insertAddress } from '../../../db';

import { URL_GEOCODING } from '../../../constants/maps';

export const currentLocation = () => {
  return async (dispatch, setState) => {
    const {
      permissions: { locationStatus },
    } = setState();
    if (locationStatus !== 'granted') return;
    const location = await Location.getCurrentPositionAsync({
      timeInterval: 1000,
      distanceInterval: 50,
    });
    const { latitude, longitude } = location.coords;
    dispatch(coordsLocation({ lat: latitude, lng: longitude }));
    await insertAddress({ lat: latitude, lng: longitude });
  };
};

export const geoCodingLocation = () => {
  return async (dispatch, setState) => {
    const {
      locations: { coords },
    } = setState();
    try {
      const resp = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
      if (!resp.ok) throw new Error('No se ha podido conectar al servicio');
      const data = await resp.json();
      if (!data.results) throw new Error('No se ha podido encontrar la dirección');
      const address = data.results[0].formatted_address;
      dispatch(addressLocation(address));
    } catch (error) {
      console.log({ error });
      throw error;
    }
  };
};

export const loadAddress = () => {
  return async (dispatch) => {
    const {
      rows: { _array },
    } = await fetchAddress();
    dispatch(historyLocations(_array));
  };
};
