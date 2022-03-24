import { useState, createContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { custom } from "./custom";
import { Esercizio } from "./Esercizio";

//creating context
export const dailyExercisesContext = createContext();

export function DayWorkout(props) {
  const [numExercisesDone, setNumExercisesDone] = useState(0);
  const [dailyExercises, setDailyExercises] = useState({});
  return (
    <dailyExercisesContext.Provider value={ [dailyExercises, setDailyExercises] }>
      <View style={styles.dayView}>
        <Text style={custom.text}>Giorno {props.day}:</Text>

        <Esercizio
          idx={numExercisesDone + 1}
        />

        {console.log(
          "Vedo gli esercizi salvati: " + JSON.stringify(dailyExercises)
        )}
        <Button
          style={styles.bottone}
          title="Aggiungi nuovo esercizio"
          onPress={() => {
            console.log("Adding new exercise tile");
          }}
        />
      </View>
    </dailyExercisesContext.Provider>
  );
}

const styles = StyleSheet.create({
  dayView: {
    flex: 1,
    backgroundColor: "#0d47a1",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginBottom: 5,
    borderRadius: 8,
  },
  bottone: {
    backgroundColor: "#4a0072",
  },
});
