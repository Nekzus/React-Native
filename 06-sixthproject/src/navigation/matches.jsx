import { MatchHistory } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MatchesNavigator = () => {
  const { colors, fonts } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Historial-Partidos"
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
        name="Historial-Partidos"
        component={MatchHistory}
        options={{ title: 'Historial de Partidos' }}
      />
    </Stack.Navigator>
  );
};

export default MatchesNavigator;
