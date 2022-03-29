import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { custom } from "../Components/custom.js";
import Form from "../Components/Form";
import { Button } from "react-native-elements";
import { useEffect, useRef, useState } from "react";
import { DayWorkout, getExercises } from "../Components/DayWorkout.js";
import Card from "../Components/Card.js";
import { PureDayCard } from "../Components/DayCard.js";
import {Alert} from 'react';
export default function AddWorkout(props) {
  //Memorizzo il nome dell'allenamento
  const [workoutName, setWorkoutName] = useState("");

  //Main JSON object to store the workout days
  const workoutDays = useRef([]);
  //Number of days to workout
  const [numDays, setNumDays] = useState(0);
  useEffect(() => {
    console.log("Rerendering in corso!!")
  }, [workoutDays.current]);
  return (
    <View style={custom.cardContainer}>
      {console.log("Giorno dei workout: ")}
      {console.log(workoutDays.current)}
      <ScrollView>
        <View style={custom.cardContainer}>
          <Form desc="titolo workout" onNewValue={setWorkoutName} />
          {console.log("Let's see")}
          {
            //Card of the day the user just added!!
            workoutDays.current.map((day, i) => {
              <PureDayCard key={i} workDay={day}/>
            })
          }
          <DayWorkout day={numDays + 1} />

          <Button
            title="Aggiungi giorno"
            onPress={() => {
              //Retrieve exercises of the Day just added
              let data = getExercises(numDays + 1);
              data !== [] && data !== undefined
                ? //Pushing data
                  (
                  console.log(data),
                  workoutDays.current.push(data),
                  //Update days
                  setNumDays(numDays + 1))
                : //Error alert
                (
                  console.log("pippoooo"),
                  alertExercise()

                )
            }}
          />
        </View>
        <Button
          title="Aggiungi workout"
          onPress={() => console.log("Workout aggiunto")}
        />
      </ScrollView>
    </View>
  );
}

//alert appears when click on save but the form is empty
const alertExercise = () =>
  Alert.alert("Attenzione!", "Inserisci almeno un esercizio", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
