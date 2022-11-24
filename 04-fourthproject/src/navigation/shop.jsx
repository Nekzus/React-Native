import { Categories, Product, Products } from '../screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'gray',
        },
      }}
      initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
