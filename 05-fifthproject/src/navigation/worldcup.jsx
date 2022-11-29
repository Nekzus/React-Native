import {
  CountryTeam,
  Groups,
  GroupsTeams,
  MatchHistory,
  NextMatches,
  TeamsCountries,
} from '../screens';

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
      initialRouteName="Grupos">
      <Stack.Screen name="Grupos" component={Groups} options={{ title: 'Grupos' }} />
      <Stack.Screen
        name="Equipos-Paises"
        component={TeamsCountries}
        options={({ route }) => ({
          title: `Paises Grupo ${route.params.letter}`,
        })}
      />
      <Stack.Screen
        name="Estadisticas-Pais"
        component={CountryTeam}
        options={({ route }) => ({
          title: `Estadisticas ${route.params.name}`,
        })}
      />
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
