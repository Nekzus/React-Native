import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

import LoadingScreen from './LoadingScreen';
import React from 'react';
import { useLocation } from '../hooks/useLocation';
import { useSelector } from 'react-redux';

const MapsViews = ({ marker, selectedLocation }) => {
  const { hasLocation, initialPosition } = useLocation();
  // const { coords } = useSelector((state) => state.locations);
  const initialRegion = {
    latitude: initialPosition?.lat,
    longitude: initialPosition?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        showsUserLocation
        initialRegion={initialRegion}
        style={styles.mapView}
        onPress={marker}>
        {selectedLocation && (
          <Marker
            title="Lugar seleccionado"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        )}
      </MapView>
    </>
  );
};

export default MapsViews;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
