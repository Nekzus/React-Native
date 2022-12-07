import { Prueba } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const PruebaNavigator = () => {
  const { colors, fonts } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Prueba"
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
      <Stack.Screen name="Prueba" component={Prueba} options={{ title: 'Prueba Redux' }} />
    </Stack.Navigator>
  );
};

export default PruebaNavigator;
