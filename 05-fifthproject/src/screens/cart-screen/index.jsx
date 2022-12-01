import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
