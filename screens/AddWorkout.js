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
import { useRef, useState } from "react";
import { DayWorkout, getExercises } from "../Components/DayWorkout.js";

export default function AddWorkout(props) {
  //Memorizzo il nome dell'allenamento
  const [workoutName, setWorkoutName] = useState("");

  //Main JSON object to store the workout days
  const [workoutDays, setWorkoutDays] = useState([]);
  //Number of days to workout
  const [numDays, setNumDays] = useState(0);
  return (
    <View style={custom.cardContainer}>
    {console.log("Giorno dei workout: ")}
    {console.log(workoutDays)}
      <ScrollView>
        <View style={custom.cardContainer}>
          <Form desc="titolo workout" onNewValue={setWorkoutName} />
          <DayWorkout day={numDays + 1} />

          <Button
            title="Aggiungi giorno"
            onPress={() => {
              setNumDays(numDays + 1);
              setWorkoutDays(getExercises(1))
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
