import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color="white" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
