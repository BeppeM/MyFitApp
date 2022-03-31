/**
 * Style of components!!
 *  */
import { StyleSheet } from "react-native";

//My common style
const stdStyle = StyleSheet.create({
    commonStyle: {
      borderColor: "white",
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 10,
      margin: 8,
    },
  });

export const custom = StyleSheet.create({
  //Background style
  background: {
    flex: 1,
    backgroundColor: "#1a237e",
    justifyContent: "center",
  },
  //All text must be white
  text: {
    fontSize: 20,
    margin: 8,
    color: "white",
  },
  //Button style for the inner container
  containerStyle: {
    alignSelf: "center",
    width: "50%",
  },
  //Cards Workout into MyTrainings screen
  cardContainer: {    
    flex: 1,
    backgroundColor: "#1565c0",
    padding: 5,
    ...stdStyle.commonStyle,
  },
  buttonStyle: {
    backgroundColor: "#1565c0",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    margin: 8,
    elevation: 3,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
//style for the card Exercises shown in the screen AddWorkout and also Workout details
  cardExercise: {
    backgroundColor: "#5e92f3",
    ...stdStyle.commonStyle,
  },
});

//Button style
export const buttonStyle = {
  buttonStyle: {
    backgroundColor: "#5e92f3",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    margin: 8,
  },
};

//Button style for the inner container
const containerStyle={containerStyle: {
    alignSelf: 'center',
    //width: '50%',
  }}