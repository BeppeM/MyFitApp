import { memo } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { custom, buttonStyle } from "../styles.js";

//Card for showing all user workouts stored on firestore
function Card({ custom, navigation, id, ...props }) {
  return (
    <View style={custom.cardContainer} key={props.uuid}>    
      <TouchableOpacity
      onPress={() =>{
        navigation(id)
      }}
      >
      <Text style={{ ...custom.text, alignSelf: "center" }}>{props.title}</Text>
      <Text style={{ ...custom.text, alignSelf: "center" }}>{props.goal}</Text>
      <HandleWorkout navigation={navigation}/>    
      </TouchableOpacity>
    </View>
  );
}

//Two buttons
//Delete workout
//Edit workout da fare
function HandleWorkout({navigation}) {
  return (
    <>
      <Pressable
        style={custom.buttonStyle}
        onPress={() => {                  
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

export const PureCardWorkout = memo(Card);

//Button style for the inner container
const containerStyle = {
  containerStyle: {
    alignSelf: "center",
    width: "50%",
  },
};
