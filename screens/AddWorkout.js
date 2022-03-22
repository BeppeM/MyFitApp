import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { custom } from "../Components/custom.js";
import Form from "../Components/Form";
import { Button } from "react-native-elements";
import { useState } from "react";
import { DayWorkout } from "../Components/DayWorkout.js";
export default function AddWorkout(props) {
  const [days, setDays] = useState(0);
  //Memorizzo il nome dell'allenamento
  const [workName, setWorkName] = useState("");

  return (
    <View style={custom.cardContainer}>
      <ScrollView>
        <View style={custom.cardContainer}>
          <Form desc="titolo workout" onNewValue={setWorkName} />
          <DayWorkout day="1" />
          <Button title="AddDay" onPress={() => setDays(days + 1)} />
        </View>
        <Button
          title="Aggiungi workout"
          onPress={() => console.log("Workout aggiunto")}
        />
      </ScrollView>
    </View>
  );
}
