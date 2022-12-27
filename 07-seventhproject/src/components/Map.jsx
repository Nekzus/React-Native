import { Image, StyleSheet, View } from 'react-native';

import React from 'react';
import { URL_MAPS } from '../constants/maps';

const Map = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrl = location ? URL_MAPS(lat, lng) : null;
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});
