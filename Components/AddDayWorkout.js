//Componente per poter aggiungere un giorno al workout all'allenamento
//Include il componente Esercizio
import { useState, useRef } from "react";
import { Text, View, Pressable } from "react-native";
import { custom } from "../styles/styles.js";
import { AddExercise } from "./AddExercise";
import { PureCardExercise } from "./CardExercise";

//creating context to use into Esercizio.js
//export const dailyExercisesContext = createContext();

//JSON object to memorize all the exercises of the current day
export let dailyExercises;

let resetNumExercisesDone;

export function AddDayWorkout(props) {
  //Number of exercises added to the day workout
  const [numExercisesDone, setNumExercisesDone] = useState(0);
  //Assegnamento per resettare quando ho finito il giorno
  resetNumExercisesDone = setNumExercisesDone;
  //Initialization with useRef hook
  dailyExercises = useRef([]);

  //esVisibility used to hide and show exercise form
  const [esVisibility, setEsVisibility] = useState(false);

  return (
    <View style={custom.cardContainer}>
      <View
        style={{ borderBottomColor: "white", borderBottomWidth: 1, margin: 4 }}
      >
        <Text style={custom.text}>Giorno {props.day}:</Text>
      </View>
      {dailyExercises.current !== [] ? (
        //Show all the exercises of the current day added
        dailyExercises.current.map((exercise, i) => (
          <PureCardExercise
            key={i}
            exercise={exercise}
            isEditable={false}
            workoutToEdit={{}}
            navigation={{}}        
          />
        ))
      ) : (
        <></>
      )}
      {
        //Exercise form hide/show
        //Passing the main JSON obj to store data
        esVisibility && (
          <AddExercise
            setEsVisibility={setEsVisibility}
            idx={numExercisesDone + 1}
            updateNumExercises={setNumExercisesDone}
            dailyExercises={dailyExercises}
          />
        )
      }

      <Pressable
        style={{ ...custom.buttonStyle, width: "75%" }}
        title="Aggiungi nuovo esercizio"
        onPress={() => {
          //hiding or showing exercise form
          setEsVisibility(!esVisibility);
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}>
          Aggiungi nuovo esercizio
        </Text>
      </Pressable>
    </View>
  );
}

//Send the exercises of the current day to the AddWorkout screen
//Method performed when is clicked the button "Aggiungi Giorno"
export const getExercises = (num) => {
  //console.log("Workout in arrivo bitch: ")
  let s = `{"Giorno${num}":`;
  console.log(dailyExercises.current[0]);
  //dailyExercises is empty
  if (dailyExercises.current[0] === undefined) return null;
  //ELSE Converting JSON object into string and append
  s += JSON.stringify(dailyExercises.current);
  s += "}";
  console.log(s);
  //let res=JSON.stringify(s)
  dailyExercises.current = [];
  //Resetting number of exercises
  resetNumExercisesDone(0);
  //Converting JSON string into JSON object
  return JSON.parse(s);
};
