/**
 * Screen used to show all the trainings of the user logged in
 */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../App.js";
import { custom } from "../styles/styles.js";
import { PureCardWorkout } from "../Components/Card.js";
import { FAB } from "react-native-paper";
import { queryWorkout, readWorkouts } from "../services/firebase.js";

export default function MyTrainings({ navigation }) {
  //Ref from the context
  const glbEmail = useContext(appContext);
  //Getting the current email logged in
  const email = glbEmail.current;
  //console.log(email);
  const [workouts, setWorkouts] = useState([]);

  //useEffect performed only on mounts of the component
  //Read all the workouts of the user logged in
  useEffect(async () => {
    //Getting data from firestore
    console.log("Fetching workouts of: " + email + " from firestore");
    reading(email, setWorkouts);
    console.log(workouts);
  }, []);

  //MyTraining component
  return (
    <View style={custom.background}>      
      <ScrollView style={{marginTop: 10}} keyboardShouldPersistTaps="always">
        {workouts === [] ? (
          <Text>Loading...</Text>
        ) : (
          //Mostro tutti i workout dell'utente
          <Workouts
            workouts={workouts}
            navigation={navigation}
            //used to read again te workouts from firestore
            resetAll={() => reading(email, setWorkouts)}
          />
        )}
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => {
          console.log("Adding new workout");
          navigation.navigate("AddWorkout", {
            reading: () => reading(email, setWorkouts),
          });
        }}
      />
    </View>
  );
}

//Components to show workouts' cards
function Workouts({ workouts, navigation, resetAll }) {
  return workouts.map((workout, i) => (
    <PureCardWorkout
      custom={custom}
      key={i}
      id={i}
      title={workout.title}
      goal={workout.goal}
      resetAll={resetAll}
      navigation={(k) => {
        console.log("Stampa in corso: ");
        console.log(workouts[k]);
        //Cambio screen e passo il workout in questione
        navigation.navigate("WorkoutDetails", {
          workout: workouts[k],
          resetAll: resetAll,
        });
      }}
    />
  ));
}

//Reading all workouts of the user logged in
const reading = async (email, setWorkouts) =>
  readWorkouts(queryWorkout(email))
    .then((snapshot) => {
      let tmp = [];
      //Getting data
      snapshot.docs.forEach((workout) => {
        tmp.push({
          ...workout.data(),
          id: workout.id,
        });
      });
      console.log("Finished fetching workouts of: " + email);
      console.log(tmp);
      //Fetch done, i rerender the whole component
      setWorkouts(tmp);
    })
    .catch((err) => console.log(err));

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#5e92f3",
  },
});
