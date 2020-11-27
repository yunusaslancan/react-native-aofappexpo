import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Search} from './src/pages';

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: styles.headerStyle}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleStyle: styles.titleStyle,
            titleStyle: styles.titleStyle,
            title: 'AÖF ÇIKMIŞ SORULAR',
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTitleStyle: styles.titleStyle,
            titleStyle: styles.titleStyle,
            title: 'AÖF ÇIKMIŞ SORULAR',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {backgroundColor: '#1C9B48', elevation: 0, shadowOpacity: 0},
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
