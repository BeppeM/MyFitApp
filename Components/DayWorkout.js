//Componente per poter aggiungere un giorno di worout all'allenamento
//Include il componente Esercizio

import { useState, createContext, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { custom } from "./custom";
import { Esercizio } from "./Esercizio";
import { CardExercise } from './CardExercise'

//creating context to use into Esercizio.js
export const dailyExercisesContext = createContext();

export function DayWorkout(props) {
//Number of exercises added to the day workout
  const [numExercisesDone, setNumExercisesDone] = useState(0);
//JSON object to memorize all the exercises of the current day
  const dailyExercises = useRef([]);
//esVisibility used to hide and show exercise form
  const [esVisibility, setEsVisibility] = useState(false);

  return (
    <dailyExercisesContext.Provider value={dailyExercises}>
      <View style={styles.dayView}>
        <Text style={custom.text}>Giorno {props.day}:</Text>
        {
//Aggiustare il design di CardExercise
//passati con map func. tutti gli esercizi aggiunti 
//Aggiungere memo per migliorare le performance
            dailyExercises.current.map((exercise) =>
                <CardExercise exercise={exercise}/>
            )
        }
        {
//Exercise form hide/show
        esVisibility && (
          <Esercizio
            setEsVisibility={setEsVisibility}
            idx={numExercisesDone + 1}
            updateNumExercises={setNumExercisesDone}
          />
        )}
        {console.log("Vedo gli esercizi salvati: ")}
        {console.log(dailyExercises.current)}
        <Button
          style={styles.bottone}
          title="Aggiungi nuovo esercizio"
          onPress={() => {
//hiding or showing exercise form
            setEsVisibility(!esVisibility);
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
    margin: 5,
    backgroundColor: "#4a0072",
  },
});
