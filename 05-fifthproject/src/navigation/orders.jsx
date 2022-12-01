import { Orders } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        presentation: 'card',
        headerBackTitle: '',
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
