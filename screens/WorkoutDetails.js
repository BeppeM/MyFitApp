/**
 * Screen used to show workout details
 */
import {  
  Text,
  View,  
  ScrollView,
} from "react-native";
import { custom } from "../styles/styles";
import { PureDayCard } from "../Components/DayCard";

export default function WorkoutDetails({ navigation, route }) {
  const workout = route.params.workout;
  //workout details passed
  console.log("Workout details: ");
  console.log(workout);
  return (
    <View style={custom.background}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Text style={{ alignSelf: "center", ...custom.text, fontSize: 30 }}>
          {workout.title}
        </Text>        
        {//mostro gli esercizi raggruppati per giorno          
          workout.allenamento.map((obj, i) => {
          return <PureDayCard style={custom.text} key={i} workDay={obj} isEditable workoutToEdit={workout} navigation={navigation} resetAll={route.params.resetAll}/>;
        })}
      </ScrollView>
      <Text style={{...custom.text, marginBottom: 15, marginLeft: 10}}>Creatore: {workout.owner}</Text>      
    </View>
  );
}

//Prende le key dell'oggetto
const getKey = (obj) => {
  const keys = Object.keys(obj);
  console.log(keys);
  return keys;
};
