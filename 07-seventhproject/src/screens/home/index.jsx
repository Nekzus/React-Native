import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
