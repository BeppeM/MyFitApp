import { memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { deleteWorkout } from "../services/firebase.js";
import { custom } from "../styles/styles.js";
import { useContext } from 'react';
import { appContext } from "../App.js";
//Card for showing all user workouts stored on firestore
function Card({ custom, navigation, id, resetAll, ...props }) {
  const glbEmail = useContext(appContext);
  console.log(id)
  return (
    <View style={custom.cardContainer} key={props.uuid}>    
      <TouchableOpacity
      onPress={() =>{
        navigation(id)
      }}
      >
      <Text style={{ ...custom.text, alignSelf: "center" }}>{props.title}</Text>
      <Text style={{ ...custom.text, alignSelf: "center" }}>{props.goal}</Text>
      <HandleWorkout navigation={navigation} id={props.title} reset={resetAll} glbEmail={glbEmail}/>    
      </TouchableOpacity>
    </View>
  );
}

//Two buttons
//Delete workout
function HandleWorkout({navigation, id, reset, glbEmail}) {
  return (
    <>
      <Pressable
        style={custom.buttonStyle}
        onPress={() => {  
          deleteWorkout(id, glbEmail.current).then(() =>{
            console.log("Workout " + id + " deleted")
            reset()
          }).catch((err) =>{
            console.log(err);
          })      
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}>
          Elimina
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
