import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      <Navigations />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
