import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import FixtureNavigator from './fixture';
import MatchesNavigator from './matches';
import NextNavigator from './next';
import PositionsNavigator from './positions';
import React from 'react';
import WorldcupNavigator from './worldcup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors, fonts } = useTheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          height: 22,
          padding: 1,
          fontFamily: fonts.content,
          fontSize: 12,
        },
        headerTitleAlign: 'center',
        tabBarActiveBackgroundColor: colors.notification,
        tabBarActiveTintColor: colors.text,
      }}
      initialRouteName="GroupsTab">
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
            <MaterialCommunityIcons
              name={focused ? 'table' : 'table-border'}
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="FixtureTab"
        component={FixtureNavigator}
        options={{
          title: 'Fixture',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'trophy' : 'trophy-outline'} size={22} color={colors.text} />
          ),
        }}
      />
      <BottomTab.Screen
        name="NextMatchsTab"
        component={NextNavigator}
        options={{
          title: 'Próximos',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'page-next' : 'page-next-outline'}
              size={22}
              color={colors.text}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MatchsTab"
        component={MatchesNavigator}
        options={{
          title: 'Historial',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'football' : 'football-outline'}
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
