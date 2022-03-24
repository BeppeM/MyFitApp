import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Form from "./Form";
import { Button } from "react-native-elements";
import { custom } from "./custom";
import SetRep from "./SetRep";
import { dailyExercisesContext } from "./DayWorkout";

export function Esercizio({day, ...props}) {
  const [dailyExercises, setDailyExercises] = useContext(dailyExercisesContext);
  //{console.log("Mostraa: ")
   //console.log(dailyExercises)
  //}
  //state for the excercise
  const [exercise, setExercise] = useState({
    title: "",
    setNum: 0,
    repNum: 0,
    description: "",
  });
//Function to check if form is empty
  const checkForm= () =>{
    return exercise.name !== "" &&
    exercise.setNum !== 0 &&
    exercise.repNum !== 0
  }
  //returning component
  return (
    <View style={styles.exerciseView}>
      <View style={styles.saveButton}>
        <Button title="Salva" 
          onPress={() => {
            checkForm() ? 
//Gestire questa parte
            setDailyExercises(dailyExercises[props.idx]={ 
              pippo: 1, 
              [props.idx]: exercise, })  :
            alertExercise()
          }}
        />
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
          console.log(text);
          setExercise({ ...exercise, title: text });
        }}
      />

      <SetRep titolo="Set " exercise={exercise} setValue={setExercise} sr={0}/>
      <SetRep titolo="Rep" exercise={exercise} setValue={setExercise} sr={1}/>

      <Text style={custom.text}>Descrizione:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        placeholder=""
        onChangeText={(text) => {
          console.log(text);
          setExercise({...exercise, description: text});
        }}
      />
    </View>
  );
}

//alert appears when click on save but the form is empty
const alertExercise = () =>
    Alert.alert(
      "Attenzione!",
      "Inserisci tutti i campi dell'esercizio",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

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
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
});

