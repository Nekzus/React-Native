import { StyleSheet, Text, View } from 'react-native';

import { Map } from '../../components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const LocationScreen = ({ navigation }) => {
  const { locationStatus } = useSelector((state) => state.permissions);
  const { coords } = useSelector((state) => state.locations);
  const { colors, fonts } = useTheme();

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
        <Map location={coords} style={styles.preview} />
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
