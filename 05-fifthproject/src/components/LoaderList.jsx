import { ActivityIndicator, StyleSheet, View } from 'react-native';

import React from 'react';

const LoaderList = () => {
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
};

export default LoaderList;

const styles = StyleSheet.create({
  containerLoader: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
