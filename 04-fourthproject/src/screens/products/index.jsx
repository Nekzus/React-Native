import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Products = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Products Screen</Text>
      <Button title="Go to Product" color="black" onPress={() => navigation.navigate('Product')} />
    </View>
  );
};

export default Products;

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
