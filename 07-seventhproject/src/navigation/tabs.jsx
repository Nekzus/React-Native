import { HomeScreen } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
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
        name={'HomeTab'}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={colors.text} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
