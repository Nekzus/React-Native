import { Cart, GroupsTeams } from '../screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const PositionsNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Posiciones"
      screenOptions={{
        presentation: 'card',
        headerBackTitle: '',
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Posiciones" component={GroupsTeams} />
    </Stack.Navigator>
  );
};

export default PositionsNavigator;
