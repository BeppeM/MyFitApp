import { View, ActivityIndicator, Text } from "react-native";
import { custom } from "../styles/styles";
import * as SecureStore from "expo-secure-store";
import { useContext, useEffect } from "react";
import { appContext } from "../App.js";

export default function Loading({ navigation }) {
  const glbEmail = useContext(appContext);
  //Get email and password from the local storage to login
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      console.log("🔐 Here's your value 🔐 \n" + result);
      return result;
    } else {
      console.log("No values stored under that key.");
      return "";
    }
  }
  useEffect(() => {
    setTimeout(() => {
      let res = getValueFor("email")
        .then((res) => {
          res !== ""
            ? ((glbEmail.current = res), navigation.replace("MyTrainings"))
            : navigation.replace("Login");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, []);

  return (
    <View style={{ ...custom.background }}>
      <Text style={{ ...custom.text, fontSize: 30, alignSelf: "center" }}>
        Loading MyFitApp...
      </Text>
      <ActivityIndicator style={{ margin: 15 }} size="large" color="#00ff00" />
    </View>
  );
}
