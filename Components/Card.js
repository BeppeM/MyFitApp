import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import { custom, buttonStyle } from "../styles.js";

//Card for showing all user workouts stored on firestore
export default function Card({ custom, ...props }) {
  return (
    <View style={custom.cardContainer} key={props.uuid}>
      <Text style={{ style: custom.text, alignSelf: "center" }}>
        {props.title}
      </Text>
      <Text style={{ style: custom.text, alignSelf: "center" }}>
        {props.goal}
      </Text>
      <HandleWorkout />
    </View>
  );
}

//Two buttons 
//Delete workout
//Edit workout
function HandleWorkout() {
  return (
    <>
      <Pressable
        style={custom.buttonStyle}
        onPress={() => {
          console.log("Add method");
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}>
          Elimina
        </Text>
      </Pressable>
      <Pressable
        style={custom.buttonStyle}
        onPress={() => {
          console.log("Add method");
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}>
          Modifica
        </Text>
      </Pressable>
    </>
  );
}

//Button style for the inner container
const containerStyle = {
  containerStyle: {
    alignSelf: "center",
    width: "50%",
  },
};
