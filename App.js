import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Allows navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login.js';
import MySchedule from './Components/MySchedule.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="MySchedule" component={MySchedule}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

