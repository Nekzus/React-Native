import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Map } from '../../components';
import { geoCodingLocation } from '../../store/slices/location';
import { useTheme } from '@react-navigation/native';

const LocationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { locationStatus } = useSelector((state) => state.permissions);
  const { address, coords } = useSelector((state) => state.locations);
  const { colors, fonts } = useTheme();

  useEffect(() => {
    dispatch(geoCodingLocation());
  }, []);

  return (
    <View style={styles.container}>
      {locationStatus !== 'granted' ? (
        <View style={styles.preview}>
          <Text
            style={{
              color: colors.text,
              fontSize: 18,
              fontFamily: fonts.content,
              textAlign: 'center',
            }}>
            Location Status: {locationStatus} debe habilitar permiso de ubicacion
          </Text>
        </View>
      ) : (
        <>
          <Map location={coords} style={styles.preview} />
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              fontFamily: fonts.content,
              textAlign: 'center',
            }}>
            {address}
          </Text>
        </>
      )}
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
    width: '95%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
});
