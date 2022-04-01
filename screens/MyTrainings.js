/**
 * Screen used to show all the trainings of the user logged in
 */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { appContext } from "../App.js";
import { custom } from "../styles.js";
import Card from "../Components/Card.js";
import uuid from "react-native-uuid";
import { FAB } from "react-native-paper";
import { queryWorkout, readWorkouts } from "../firebase.js";
//import { doc } from 'firebase/firestore';

//let trainings = require('../allenamenti.json');
export default function MyTrainings({ navigation }) {
//Ref from the context
  const glbEmail = useContext(appContext);
//Getting the current email logged in
  const email = glbEmail.current
  //console.log(email);
  const [workouts, setWorkouts] = useState([]);

  //useEffect performed only on mounts of the component
  useEffect(async () => {
    //Getting data from firestore
    console.log("Fetching workouts of: " + email + " from firestore");
    reading(email, setWorkouts);
  }, []);

  //MyTraining component
  return (
    <View style={custom.background}>
      <Text style={custom.text}>Ci siamo {email}</Text>
      <ScrollView>
        {workouts === [] ? (
          <Text>Loading...</Text>
        ) : (          
          <Workouts workouts={workouts} navigation={navigation} />
        )}
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => {
          console.log("Adding new workout");
          navigation.navigate("AddWorkout", {
            reading:() => reading(email, setWorkouts)            
          });
        }}
      />
    </View>
  );
}

/**
 * onPress={() => {
        navigation.navigate("WorkoutDetails", {
          workout: workout,
        });
      }}
 * 
 */

//Components to show workouts' cards
function Workouts({ workouts, navigation }) {
  return workouts.map((workout, i) => (    
      <Card custom={custom} key={i} title={workout.title} goal={workout.goal} />
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
