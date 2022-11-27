import { GroupsTeams, MatchHistory, NextMatches } from '../screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerStyle: {
          // backgroundColor: 'gray',
        },
      }}
      initialRouteName="Grupos-Posiciones">
      <Stack.Screen name="Grupos-Posiciones" component={GroupsTeams} />
      <Stack.Screen name="Proximos-Partidos" component={NextMatches} />
      <Stack.Screen name="Historial-Partidos" component={MatchHistory} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
