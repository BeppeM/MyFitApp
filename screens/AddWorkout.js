//Screen used to add a new Workout of the user
import { Text, View, ScrollView, Alert, Pressable } from "react-native";
import { custom } from "../styles/styles.js";
import Form from "../Components/Form";
import { useRef, useState, useContext } from "react";
import { AddDayWorkout, getExercises } from "../Components/AddDayWorkout.js";
import { PureDayCard } from "../Components/DayCard.js";
//context to get email from the main screen
import { appContext } from "../App.js";
//write on firestore
import { writeUserWorkout } from "../services/firebase.js";

//JSON object che contiene tutti gli esercizi dei giorni aggiunti!
let workoutDays;
//variable to store email and memorize into workoutDays
let emailJSON;
export default function AddWorkout({ navigation, route }) {
  //Memorizzo il nome dell'allenamento
  const [workoutName, setWorkoutName] = useState("");
  const glbEmail = useContext(appContext);
  //Setting email to save into json and store on firestore
  emailJSON = glbEmail.current;
  //Main JSON object to store the workout days
  workoutDays = useRef([]);
  //Number of days to workout
  const [numDays, setNumDays] = useState(0);

  return (
    <View style={custom.background}>
      {/* {console.log(glbEmail.current)}
      {console.log("Giorno dei workout: ")}
      {console.log(workoutDays.current)} */}
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={custom.background}>
          <Form desc="titolo workout" onNewValue={setWorkoutName} />
          {workoutDays.current.map((work, i) => {
            return <PureDayCard key={i} workDay={work} />;
          })}
          <AddDayWorkout day={numDays + 1} />
          <View style={{ marginTop: 20 }}>
            <Pressable
              style={custom.buttonStyle}
              onPress={() => {
                //Retrieve exercises of the Day just added
                let data = getExercises(numDays + 1);
                data !== null && data !== undefined
                  ? //Pushing data
                    (workoutDays.current.push(data),
                    //Update days
                    setNumDays(numDays + 1))
                  : //Error alert
                    alertDay();
              }}
            >
              <Text
                style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}
              >
                Aggiungi giorno
              </Text>
            </Pressable>
            <Pressable
              style={custom.buttonStyle}
              onPress={
                workoutName !== "" && workoutDays.current[0] !== undefined
                  ? () => addWorkout(workoutName, navigation, route)
                  : alertTitle
              }
            >
              <Text
                style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}
              >
                Aggiungi workout
              </Text>
            </Pressable>
          </View>
        </View>
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
const addWorkout = async (workoutName, navigation, route) => {
  let s = `{"title": "${workoutName}",`;
  s += `"owner": "${emailJSON}",`;
  s += `"allenamento":`;
  s += JSON.stringify(workoutDays.current);
  s += "}";
  console.log("Workout aggiunto con successo");
  console.log(workoutName);
  console.log(JSON.parse(s));
  //Salvo su firestore
  writeUserWorkout(JSON.parse(s)).then((message) => {
    console.log("Fatto bitch!");
    route.params
      .reading()
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

//alert appears when click on Aggiungi workout ma il titolo è vuoto
const alertTitle = () =>
  Alert.alert("Attenzione!", "Inserisci il workout", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
