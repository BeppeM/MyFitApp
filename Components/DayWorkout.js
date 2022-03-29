//Componente per poter aggiungere un giorno di worout all'allenamento
//Include il componente Esercizio

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { custom } from "./custom";
import { Esercizio } from "./Esercizio";
import { PureCardExercise } from './CardExercise'

//creating context to use into Esercizio.js
//export const dailyExercisesContext = createContext();


//JSON object to memorize all the exercises of the current day
export let dailyExercises;

export function DayWorkout(props) {
//Number of exercises added to the day workout
  const [numExercisesDone, setNumExercisesDone] = useState(0);

  //Initialization with useRef hook
  dailyExercises = useRef([]);

//esVisibility used to hide and show exercise form
  const [esVisibility, setEsVisibility] = useState(false);

  return (
      <View style={styles.dayView}>
        <Text style={custom.text}>Giorno {props.day}:</Text>
        {
          dailyExercises.current !== [] ?
//Aggiustare il design di CardExercise
//Show all the exercises of the current day added
            dailyExercises.current.map((exercise, i) =>
                <PureCardExercise key={i} exercise={exercise}/>
            ) : 
            <></>
        }
        {
//Exercise form hide/show
//Passing the main JSON obj to store data
        esVisibility && (
          <Esercizio
            setEsVisibility={setEsVisibility}
            idx={numExercisesDone + 1}
            updateNumExercises={setNumExercisesDone}
            dailyExercises = {dailyExercises}
          />
        )}

        {//console.log("Vedo gli esercizi salvati: ")
        }
        {//console.log(dailyExercises.current[0])
        }

        <Button
          style={styles.bottone}
          title="Aggiungi nuovo esercizio"
          onPress={() => {
//hiding or showing exercise form
            setEsVisibility(!esVisibility);
          }}
        />
      </View>
  );
}

//Send the exercises of the current day to the AddWorkout screen
//Method performed when is clicked the button "Aggiungi Giorno"
export const getExercises = (num) =>{
  //console.log("Workout in arrivo bitch: ")
  let s= `"Giorno${num}":`
  console.log(dailyExercises.current[0])
  if(dailyExercises.current[0] === undefined)
    return []
  s+= JSON.stringify(dailyExercises.current)
  console.log(s);
  let res=JSON.stringify(s)
  dailyExercises.current= [];
  return JSON.parse(res);
};

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
