import { NextMatches } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NextNavigator = () => {
  const { colors, fonts } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Proximos-Partidos"
      screenOptions={{
        presentation: 'card',
        headerBackTitle: '',
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTitleStyle: {
          fontFamily: fonts.title,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Proximos-Partidos"
        component={NextMatches}
        options={{ title: 'Próximos Partidos' }}
      />
    </Stack.Navigator>
  );
};

export default NextNavigator;
