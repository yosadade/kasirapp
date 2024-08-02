/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Orders, Settings, Login, Splash, History} from '../screens';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      headerShadowVisible: false,
      headerBackTitleVisible: false,
    }}
    tabBar={props => <BottomNavigator {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Orders" component={Orders} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const Navigations = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default Navigations;
