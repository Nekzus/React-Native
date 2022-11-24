import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Categories Screen</Text>
      <Button
        title="Go to Products"
        color="black"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

export default Categories;

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
