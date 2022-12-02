import { CountryTeam, Groups, TeamsCountries } from '../screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const WorldcupNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Grupos"
      screenOptions={{
        presentation: 'card',
        headerBackTitle: '',
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTitleStyle: {
          fontFamily: 'Qatar-Bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Grupos" component={Groups} options={{ headerShown: false }} />
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
    </Stack.Navigator>
  );
};

export default WorldcupNavigator;
