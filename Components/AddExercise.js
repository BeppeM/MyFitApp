//Form used to insert a new Exercise
//It is used inside component DayWorkout
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
} from "react-native";
import { custom } from "../styles.js";
import SetRep from "./SetRep";

export function AddExercise({ day, dailyExercises, ...props }) {
  //state for the excercise form
  const [exercise, setExercise] = useState({
    title: "",
    setNum: 0,
    repNum: 0,
    description: "",
  });

  //Function to check if form is empty
  const checkForm = () => {
    return (
      exercise.name !== "" && exercise.setNum !== 0 && exercise.repNum !== 0
    );
  };

  //Method to add exercise to the main JSON object
  const update = () => {
    //updating exercises of the day
    dailyExercises.current.push(exercise);
    console.log("Exercise added: ");
    console.log(dailyExercises);
    //Closing Esercizio component
    props.setEsVisibility();
    //updating exercises number
    props.updateNumExercises(props.idx);
  };
  //returning component
  return (
    <View style={styles.exerciseView}>
      <View style={styles.saveButton}>
        <Pressable
          style={{ ...custom.buttonStyle, width: "25%" }}
          onPress={() => {
            checkForm()
              ? //Gestire questa parte
                update()
              : alertExercise();
          }}
        >
          <Text style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}>Salva</Text>
        </Pressable>
      </View>
      <ExcerciseView
        idx={props.idx}
        exercise={exercise}
        setExercise={setExercise}
      />
    </View>
  );
}

//Componente per mostrare tutto il form per inserire l'esercizio
function ExcerciseView({ idx, exercise, setExercise }) {
  return (
    <View>
      <Text style={[custom.text, { alignSelf: "center" }]}>
        Esercizio {idx}:
      </Text>
      <Text style={custom.text}>Titolo esercizio:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          //console.log(text);
          setExercise({ ...exercise, title: text });
        }}
      />

      <SetRep titolo="Set " exercise={exercise} setValue={setExercise} sr={0} />
      <SetRep titolo="Rep" exercise={exercise} setValue={setExercise} sr={1} />

      <Text style={custom.text}>Descrizione:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        placeholder=""
        onChangeText={(text) => {
          //console.log(text);
          setExercise({ ...exercise, description: text });
        }}
      />
    </View>
  );
}

//alert appears when click on save but the form is empty
const alertExercise = () =>
  Alert.alert("Attenzione!", "Inserisci tutti i campi dell'esercizio", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const styles = StyleSheet.create({
  exerciseView: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  //Campi input per l'esercizio
  textInput: {
    borderColor: "white",
    borderWidth: 1,
    //alignSelf: 'flex-start',
    width: "95%",
    margin: 8,
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
  //Pulsante per salvare l'esercizio
  saveButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
