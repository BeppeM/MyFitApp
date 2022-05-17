/**
 * Screen used to show workout details
 */
import { Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { custom } from "../styles/styles";
import { PureDayCard } from "../Components/DayCard";
export default function WorkoutDetails({ navigation, route }) {
  useEffect(() => {
    console.log("Pippo!!");
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      //It's returned an array of quotes
      .then(function (data) {
        let indx = Math.floor(Math.random() * data.length);
        //Update the quote and rerendering the screen
        setQuote(data[indx]);
        console.log("Quote of the day: ");
        console.log(quote);
      });
  }, []);

  //Variable for storing the quote fetched from the API https://type.fit/api/quotes
  let [quote, setQuote] = useState("");
  const workout = route.params.workout;
  //workout details passed
  console.log("Workout details: ");
  console.log(workout);
  return (
    <View style={custom.background}>
      {quote !== "" ? (
        <View>
          <Text style={{ alignSelf: "center", ...custom.text, fontSize: 30 }}>
            {workout.title}
          </Text>
          <Text
            style={{
              ...custom.text,
              fontSize: 20,
              marginLeft: 10,
            }}
          >
            "{quote.text}" {"\n"}cit. {quote.author}
          </Text>
        </View>
      ) : (
        <Text></Text>
      )}
      <ScrollView keyboardShouldPersistTaps="always">
        {
          //mostro gli esercizi raggruppati per giorno
          workout.allenamento.map((obj, i) => {
            return (
              <PureDayCard
                style={custom.text}
                key={i}
                workDay={obj}
                isEditable
                workoutToEdit={workout}
                navigation={navigation}
                resetAll={route.params.resetAll}
              />
            );
          })
        }
      </ScrollView>
      <Text style={{ ...custom.text, marginBottom: 15, marginLeft: 10 }}>
        Creatore: {workout.owner}
      </Text>
    </View>
  );
}

//Prende le key dell'oggetto
const getKey = (obj) => {
  const keys = Object.keys(obj);
  console.log(keys);
  return keys;
};
