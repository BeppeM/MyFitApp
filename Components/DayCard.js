//Card used to show the days added from the user
import { View, Text } from "react-native";
import { memo } from "react";
import { PureCardExercise } from "./CardExercise";
import { custom } from '../styles.js';
//into the screen AddWorkout
function DayCard({ workDay }) {
  //  console.log("Entra")
  let key = getKey(workDay);
  return (
    <View style={custom.cardContainer}>
      <Text style={{...custom.text, alignSelf:'center'}}>{key}</Text>
      {workDay[key].map((exercise, i) => {
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

export const PureDayCard = memo(DayCard);
