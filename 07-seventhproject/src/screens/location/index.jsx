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
        <Text style={{ color: colors.text, fontSize: 18, fontFamily: fonts.content }}>
          Location Status: {locationStatus} debe habilitar permiso de ubicacion
        </Text>
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
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
