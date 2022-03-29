//Card used to show the exercises added from the user 
//into the screen AddWorkout

import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
function CardExercise({ exercise }) {

  return (
    <View style={styles.exerciseCard}>
      <Text>{exercise.title}</Text>
      <Text>{exercise.setNum}</Text>
      <Text>{exercise.repNum}</Text>
      <Text>{exercise.description}</Text>
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
