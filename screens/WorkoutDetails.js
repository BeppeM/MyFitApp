/**
 * Screen used to show workout details
 */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { custom } from "../styles";
import CardExercise from "../Components/CardExercise";
import { PureDayCard } from "../Components/DayCard";

export default function WorkoutDetails({ navigation, route }) {
  const workout = route.params.workout;
  //workout details passed
  console.log("Workout details: ");
  console.log(workout);
  return (
    <View style={custom.background}>
      <ScrollView>
        <Text style={{ alignSelf: "center", ...custom.text }}>
          {workout.title}
        </Text>
        <Text style={custom.text}>Creatore: {workout.owner}</Text>
        {//mostro gli esercizi raggruppati per giorno          
          workout.allenamento.map((obj, i) => {
          return <PureDayCard style={custom.text} key={i} workDay={obj} isEditable workoutToEdit={workout} navigation={navigation} resetAll={route.params.resetAll}/>;
        })}
      </ScrollView>
    </View>
  );
}

//Prende le key dell'oggetto
const getKey = (obj) => {
  const keys = Object.keys(obj);
  console.log(keys);
  return keys;
};
