import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Product = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Product Screen</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
});
