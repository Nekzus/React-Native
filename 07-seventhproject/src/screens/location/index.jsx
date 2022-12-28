import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
  }, [coords]);

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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Maps');
            }}>
            <View style={{ ...styles.button, backgroundColor: colors.card }}>
              <Text style={{ ...styles.buttonText, color: colors.text, fontFamily: fonts.title }}>
                Seleccionar ubicación
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('History');
            }}>
            <View style={{ ...styles.button, backgroundColor: colors.card }}>
              <Text style={{ ...styles.buttonText, color: colors.text, fontFamily: fonts.title }}>
                Ver historial
              </Text>
            </View>
          </TouchableOpacity>
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
  button: {
    width: 250,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  buttonText: {
    fontSize: 17,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
});
