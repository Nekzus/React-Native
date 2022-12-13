import { GroupsTeams } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const PositionsNavigator = () => {
  const { colors, fonts } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Grupos-Posiciones"
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
        name="Grupos-Posiciones"
        component={GroupsTeams}
        options={{ title: 'Grupos y Posiciones' }}
      />
    </Stack.Navigator>
  );
};

export default PositionsNavigator;
