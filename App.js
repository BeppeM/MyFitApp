import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
//Allows navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login.js";
import MyTrainings from "./screens/MyTrainings.js";
import WorkoutDetails from "./screens/WorkoutDetails.js";
import auth from "./firebase.js";
import { createContext, useState } from "react";
import AddWorkout from "./screens/AddWorkout.js";
import { custom } from "./styles.js";
import Loading from "./screens/Loading.js";
//Navigation into the app
const Stack = createNativeStackNavigator();
//Creating the context
export const appContext = createContext();

export default function App() {
  //const [email, setEmail] = useState("");
  const glbEmail = useRef("");
  return (
    <appContext.Provider value={ glbEmail }>
      <Pippo styles={custom.container} />
    </appContext.Provider>
  );
}

function Pippo() {
  return (
    <NavigationContainer>
      <Stack.Navigator>      
      <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyTrainings" component={MyTrainings} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
