/**
 * Screen used to show workout details
 */
import { Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { custom } from "../styles/styles";
import { PureDayCard } from "../Components/DayCard";
import { AppLoading } from "expo";
import { 
  useFonts,
  Allan_400Regular,
  Allan_700Bold 
} from '@expo-google-fonts/allan';


export default function WorkoutDetails({ navigation, route }) {
  //Variable for storing the quote fetched from the API https://type.fit/api/quotes
  let [quote, setQuote] = useState("");
  //Workout details
  const workout = route.params.workout;
  console.log("Workout details: ");
  console.log(workout);

  useEffect(() => {
    console.log("Fetching the motivational quote...")
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      //It's returned an array of quotes
      .then(function (data) {
        //Fetching random quote
        let indx = Math.floor(Math.random() * data.length);
        //Update the quote and rerendering the screen
        setQuote(data[indx]);        
      });
  }, []);
  
  console.log("Quote of the day: ");
        console.log(quote);  
  //Fetching the font
  let [fontsLoaded, error] = useFonts({
    Allan_400Regular
  })
  
  if(!fontsLoaded){
    return <View></View>
  }

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
              fontFamily: "Allan_400Regular"
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
