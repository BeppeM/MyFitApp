import { useState, createContext, useRef } from "react";
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


//creating context to use into Esercizio.js
export const dailyExercisesContext = createContext();

export function DayWorkout(props) {
  const [numExercisesDone, setNumExercisesDone] = useState(0);
//JSON object to memorize all the exercises of the current day
  const dailyExercises= useRef({});
  
  return (
    <dailyExercisesContext.Provider value={ dailyExercises }>
      <View style={styles.dayView}>
        <Text style={custom.text}>Giorno {props.day}:</Text>
{
//Qui vanno messe le Card degli esercizi che ho già inserito!!
        console.log(numExercisesDone)
}
        <Esercizio
          idx={numExercisesDone + 1}
          updateNumExercises={setNumExercisesDone}
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
