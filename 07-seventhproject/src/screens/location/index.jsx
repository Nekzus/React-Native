import * as Location from 'expo-location';

import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Map } from '../../components';
import React from 'react';
import { askPermissionLocation } from '../../store/slices/permissions';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';

const LocationScreen = ({ navigation }) => {
  const { locationStatus } = useSelector((state) => state.permissions);
  const dispatch = useDispatch();
  const { coords } = useSelector((state) => state.locations);
  const { colors, fonts } = useTheme();
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 18, fontFamily: fonts.content }}>
        Location Status: {locationStatus}
      </Text>

      <Map location={coords} style={styles.preview} />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
