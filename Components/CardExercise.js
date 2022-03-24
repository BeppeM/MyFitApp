import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
export function CardExercise({ exercise }){
    console.log("Bella bronsky")
    return(
        <View style={styles.exerciseCard}>
        <Text>{exercise.title}</Text>      
        <Text>{exercise.setNum}</Text>      
        <Text>{exercise.repNum}</Text>      
        <Text>{exercise.description}</Text>      
        </View>
    )
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
})