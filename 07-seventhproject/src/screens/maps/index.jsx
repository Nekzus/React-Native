import MapView, { Marker } from 'react-native-maps';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from '@expo/vector-icons/Ionicons';
import { coordsLocation } from '../../store/slices/location/locationsSlice';

const MapsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState();
  const { coords } = useSelector((state) => state.locations);
  const initialRegion = {
    latitude: coords.lat,
    longitude: coords.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandlePicklocation = (e) => {
    setSelectedLocation({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    });
  };

  const onHandleSaveLocation = () => {
    if (!selectedLocation) return;
    dispatch(coordsLocation(selectedLocation));
    navigation.navigate('Location');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <Ionicons name="md-save-sharp" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [onHandlePicklocation]);
  return (
    <View style={styles.container}>
      <MapView initialRegion={initialRegion} style={styles.mapView} onPress={onHandlePicklocation}>
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
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    height: '100%',
    width: '100%',
  },
});
