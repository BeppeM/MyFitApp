////Card used to show the days added from the user

import { View } from "react-native-web";
import { memo } from "react";
import { PureCardExercise } from "./CardExercise";
//into the screen AddWorkout
function DayCard({ workDay }) {
  return (
    <View>
    <Text>Bellaaaaa</Text>
      {workDay.map((exercise) => {
        <PureCardExercise exercise={exercise} />;
      })}
    </View>
  );
}

export const PureDayCard = memo(DayCard);
