import { Ionicons } from '@expo/vector-icons';
import OrderNavigator from './orders';
import PositionsNavigator from './positions';
import React from 'react';
import WorldcupNavigator from './worldcup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Grupos">
      <BottomTab.Screen
        name={'GroupsTab'}
        component={WorldcupNavigator}
        options={{
          title: 'Grupos',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={colors.text} />
          ),
        }}
      />
      <BottomTab.Screen
        name="PositionsTab"
        component={PositionsNavigator}
        options={{
          title: 'Posiciones',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={22} color={colors.text} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MatchsTab"
        component={OrderNavigator}
        options={{
          title: 'Partidos',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
