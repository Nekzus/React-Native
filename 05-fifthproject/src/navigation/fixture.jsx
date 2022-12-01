import { Fixture } from '../screens';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const FixtureNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Fixture"
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
      <Stack.Screen name="Fixture" component={Fixture} options={{ title: 'Llaves Mundial' }} />
    </Stack.Navigator>
  );
};

export default FixtureNavigator;
