//Screen used to add a new Workout of the user
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { custom } from "../Components/custom.js";
import Form from "../Components/Form";
import { Button } from "react-native-elements";
import { useEffect, useRef, useState, useContext } from "react";
import { DayWorkout, getExercises } from "../Components/DayWorkout.js";
import Card from "../Components/Card.js";
import { PureDayCard } from "../Components/DayCard.js";
import { appContext } from "../App.js";
import { writeUserWorkout } from "../firebase.js";

//JSON object che contiene tutti gli esercizi dei giorni aggiunti!
let workoutDays;
//variable to store email and memorize into workoutDays
let emailJSON;
export default function AddWorkout({navigation, route}) {
  //Memorizzo il nome dell'allenamento
  const [workoutName, setWorkoutName] = useState("");
  const {email} = useContext(appContext);
//Setting email to save into json and store on firestore
  emailJSON=email;
  //Main JSON object to store the workout days
  workoutDays= useRef([]);
  //Number of days to workout
  const [numDays, setNumDays] = useState(0);

  return (
    <View style={custom.cardContainer}>
      {console.log(email)}
      {console.log("Giorno dei workout: ")}
      {console.log(workoutDays.current)}
      <ScrollView>
        <View style={custom.cardContainer}>    
          <Form desc="titolo workout" onNewValue={setWorkoutName} />      
          
          <DayWorkout day={numDays + 1} />

          <Button
            title="Aggiungi giorno"
            onPress={() => {
              //Retrieve exercises of the Day just added
              let data = getExercises(numDays + 1);
//              console.log("Dati: ")
//              console.log(data)
              data!== null && data !== undefined
                ? //Pushing data
                  (        
                  workoutDays.current.push(data),
                  //Update days
                  setNumDays(numDays + 1))
                : //Error alert              
                  alertDay()
            }}
          />
        </View>
        {        
            (//console.log("O shit!!"),
            workoutDays.current.map((work, i) =>{
              return <PureDayCard key={i} workDay={work}/>
            })
            )            
          }
        <Button
          title="Aggiungi workout"
          onPress={workoutName !== "" && workoutDays.current[0] !== undefined
          ? () => addWorkout(workoutName, navigation, route) 
          : alertTitle}
        />
      </ScrollView>
    </View>
  );
}

//alert appears when click on Aggiungi giorno ma il giorno precedente è vuoto!
const alertDay = () =>
  Alert.alert("Attenzione!", "Inserisci almeno un esercizio", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

//Costruzione del JSON object
const addWorkout = async (workoutName, navigation, route) =>{
  let s= `{"title": "${workoutName}",`
  s+=`"owner": "${emailJSON}",`
  s+= `"allenamento":`
  s+= JSON.stringify(workoutDays.current)
  s+= "}"
  console.log("Workout aggiunto con successo");
  console.log(workoutName);
  console.log(JSON.parse(s));
  writeUserWorkout(JSON.parse(s)).then((message) =>{
    console.log("Fatto bitch!");
    route.params.reading()
    navigation.goBack()    
  });
}

//alert appears when click on Aggiungi workout ma il titolo è vuoto
const alertTitle = () =>
  Alert.alert("Attenzione!", "Inserisci il titolo dell'allenamento", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);