import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { coordsLocation, historyLocations } from '../../store/slices/location/locationsSlice';
import { fetchAddress, insertAddress } from '../../db';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MapsViews } from '../../components';
import { useDispatch } from 'react-redux';

const MapsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState();
  const onHandlePicklocation = (e) => {
    setSelectedLocation({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    });
  };

  const onHandleSaveLocation = async () => {
    if (!selectedLocation) return;
    dispatch(coordsLocation(selectedLocation));
    const { lat, lng } = selectedLocation;
    await insertAddress(lat, lng);
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
      <MapsViews selectedLocation={selectedLocation} marker={onHandlePicklocation} />
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
