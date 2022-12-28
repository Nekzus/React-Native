import * as Location from 'expo-location';

import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState();
  useEffect(() => {
    currentLocation();
  }, []);
  const currentLocation = async () => {
    const location = await Location.getCurrentPositionAsync({
      timeInterval: 1000,
      distanceInterval: 50,
    });
    const { latitude, longitude } = location.coords;
    setInitialPosition({ lat: latitude, lng: longitude });
    setHasLocation(true);
  };

  return {
    hasLocation,
    initialPosition,
  };
};
