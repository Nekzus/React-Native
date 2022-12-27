import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { askPermissionLocation } from '../../store/slices/permissions';
import { currentLocation } from '../../store/slices/location/thunks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';

const PermissionsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors, fonts } = useTheme();
  useEffect(() => {
    dispatch(askPermissionLocation());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(currentLocation()), navigation.navigate('Location');
        }}>
        <View style={{ ...styles.button, backgroundColor: colors.card }}>
          <Text style={{ ...styles.buttonText, color: colors.text, fontFamily: fonts.title }}>
            Mi ubicación
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
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
