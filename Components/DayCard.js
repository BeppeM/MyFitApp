//Card used to show the days added from the user into the form
//Component used into the screen AddWorkout
import { View, Text, Pressable } from "react-native";
import { memo } from "react";
import { PureCardExercise } from "./CardExercise";
import { custom } from "../styles.js";
//into the screen AddWorkout
function DayCard({ workDay, isEditable, workoutToEdit, navigation, resetAll }) {
  console.log("Entra");
  let key = getKey(workDay);
  return (
    <View style={custom.cardContainer}>
      {isEditable ? (
        <Editable workout={workoutToEdit} navigation={navigation} id={key} resetAll={resetAll} />
      ) : (
        <></>
      )}
      <Text style={{ ...custom.text, alignSelf: "center" }}>{key}</Text>
      {workDay[key].map((exercise, i) => {
        console.log(workDay);
        return <PureCardExercise key={i} exercise={exercise} />;
      })}
    </View>
  );
}

//Get the property from the JSON
//Giorno{idx}
const getKey = (work) => {
  const [key] = Object.keys(work);
  return key;
};

//Show the button to open EditWorkoutDay screen
function Editable({ workout, navigation, id, resetAll }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <Pressable
        style={{
          ...custom.buttonStyle,
          width: "25%",
        }}
        onPress={() => {          
          navigation.replace("EditWorkoutDay",{
            workoutToEdit: workout,
            id: id,
            resetAll: resetAll
          })
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center", fontSize: 15 }}>
          Modifica
        </Text>
      </Pressable>
    </View>
  );
}

export const PureDayCard = memo(DayCard);
