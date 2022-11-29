import { GroupsTeams, MatchHistory, NextMatches } from '../screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const WorldcupNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerBackTitle: '',
        headerStyle: {
          backgroundColor: colors.card,
        },
      }}
      initialRouteName="Grupos-Posiciones">
      <Stack.Screen
        name="Grupos-Posiciones"
        component={GroupsTeams}
        options={{ title: 'Grupos y Posiciones' }}
      />
      <Stack.Screen
        name="Proximos-Partidos"
        component={NextMatches}
        options={{ title: 'Próximos Partidos' }}
      />
      <Stack.Screen
        name="Historial-Partidos"
        component={MatchHistory}
        options={{ title: 'Historial de Partidos' }}
      />
    </Stack.Navigator>
  );
};

export default WorldcupNavigator;
