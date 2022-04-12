//Card used to show the exercises added from the user into the form
//into the screen AddWorkout

import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { custom } from "../styles/styles.js";
function CardExercise({ exercise }) {
  return (
    <View style={custom.cardExercise}>
      <Text style={{ ...custom.text, alignSelf: "center" }}>
        {exercise.title}
      </Text>
      <Text style={{ ...custom.text, fontSize: 15 }}>
        Sets: {exercise.setNum}
      </Text>
      <Text style={{ ...custom.text, fontSize: 15 }}>
        Reps: {exercise.repNum}
      </Text>
      {exercise.description !== "" ? (
        <Text style={{ ...custom.text, fontSize: 15 }}>
          {`Descrizione: ${exercise.description}`}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  exerciseCard: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginBottom: 8,
    borderRadius: 5,
  },
});

export const PureCardExercise = memo(CardExercise);
