import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { AddDayWorkout, getExercises } from "../Components/AddDayWorkout";
import { custom } from "../styles";
import { writeUserWorkout } from "../firebase";
export default function EditWorkoutDay({ route, navigation }) {
  console.log("Bella");
  console.log(route.params.workoutToEdit);
  let [giorno, setGiorno] = useState(
    route.params.id[route.params.id.length - 1]
  );
  return (
    <View style={custom.background}>
      <ScrollView keyboardShouldPersistTaps="always">
        <AddDayWorkout day={giorno} />
        <Pressable style={{...custom.buttonStyle, marginBottom: 10}}
        onPress={() =>{
            console.log("Esercizi: ")
            updateDay(getExercises(giorno), route.params.workoutToEdit, route.params.id, navigation, route.params.resetAll);

        }}
        >
          <Text style={custom.text}>Modifica Giorno {giorno}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const updateDay = async (newDayWork, workout, id, navigation, resetAll) =>{
    let newWorkout= {
        "allenamento": [],
        "title": workout.title,
        "owner": workout.owner
    }
    workout.allenamento.map((giorno) =>{
        if(getKey(giorno) === id){
            newWorkout.allenamento.push(newDayWork)
        }
        else{
            newWorkout.allenamento.push(giorno)
        }
    })
    console.log("Forse ci sono")
    console.log(newWorkout)
    //scrittura dell'allenamento su firestore
    writeUserWorkout(newWorkout).then((message) => {
        console.log("Salvataggio bitch!");
        resetAll();        
        navigation.goBack();
      }).catch((err)=>{
        console.log(err)
      })
}

//Get the property from the JSON
//Giorno{idx}
const getKey = (work) => {
    const [key] = Object.keys(work);
    return key;
  };