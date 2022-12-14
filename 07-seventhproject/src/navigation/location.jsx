import { HistoryScreen, LocationScreen, MapsScreen, PermissionsScreen } from '../screens';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const LocationNavigator = () => {
  const { colors, fonts } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Permissions"
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
        name="Permissions"
        component={PermissionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ title: 'Mi ubicación' }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: 'Mapa' }} />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: 'Historial de ubicaciones' }}
      />
    </Stack.Navigator>
  );
};

export default LocationNavigator;
