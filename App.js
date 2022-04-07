import React, { useRef } from "react";
//Allows navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login.js";
import MyTrainings from "./screens/MyTrainings.js";
import WorkoutDetails from "./screens/WorkoutDetails.js";
import { createContext } from "react";
import AddWorkout from "./screens/AddWorkout.js";
import { custom } from "./styles.js";
import Loading from "./screens/Loading.js";
import { Button, LogBox } from "react-native";
import EditWorkoutDay from "./screens/EditWorkoutDay.js";
//Ignore all warnings
LogBox.ignoreAllLogs();

//Navigation into the app
const Stack = createNativeStackNavigator();
//Creating the context
export const appContext = createContext();
export default function App() {
  const glbEmail = useRef("");
  return (
    <appContext.Provider value={glbEmail}>
      <Initialize styles={custom.container} />
    </appContext.Provider>
  );
}

function Initialize() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyTrainings" component={MyTrainings} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
        <Stack.Screen name="EditWorkoutDay" component={EditWorkoutDay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
