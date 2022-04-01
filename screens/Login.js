import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import Form from "../Components/Form";
import { appContext } from "../App.js";
import { useState, useContext, useEffect, useRef } from "react";
import { Button } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
//style
import { custom, buttonStyle, containerStyle } from "../styles.js";
//firebise authentication
import { auth } from "../firebase.js";
import { handleLogin, handleReg } from "../firebase.js";

export default function Login({ navigation }) {
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

  //setEmail from the context because we need it for other screens
  const { email, setEmail } = useContext(appContext);
  const savedEmail = useRef("");
  const [password, setPwd] = useState("");
  console.log(savedEmail);
  //error in login
  const [logErr, setLogErr] = useState("");

  //Try to get credentials every time the component is mounted
  useEffect(() => {
    getValueFor("email").then((resEmail) => {
      console.log(resEmail);
      //setEmail(resEmail);
      savedEmail.current= resEmail
    });
    return () => {
      console.log("unmounted");
    };
  }, []);

  //RETURN COMPONENT
  return (
    <View style={custom.background}>
      <Form
        desc="email"
        val={email}
        onNewValue={(v) => {
          setEmail(v);
        }}
      />
      <Form
        desc="password"
        val={password}
        onNewValue={(v) => {
          setPwd(v);
        }}
      />
      <View>
        <Text style={custom.text}>{logErr}</Text>
      </View>
      <Button
        //Button used for login
        title="Login"
        titleStyle={{ fontWeight: "bold" }}
        {...containerStyle}
        {...buttonStyle}
        onPress={() => {
          handleLogin(email, password)
            .then((userCredential) => {
              // Signed in
              console.log("Bellaaaaa");
              alertSaveCred(email);
              navigation.replace("MyTrainings");
            })
            .catch((error) => {
              setLogErr(
                "Errore, credenziali errate. Riprova oppure registrati"
              );
            });
        }}
      />
      <Button
        //Button used for registration
        title="Registrati"
        titleStyle={{ fontWeight: "bold" }}
        {...containerStyle}
        {...buttonStyle}
        onPress={() => {
          handleReg(email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              navigation.replace("MyTrainings");
            })
            .catch((error) => {
              setLogErr(error.message);
            });
        }}
      />
    {savedEmail.current !== "" ? navigation.replace("MyTrainings") : null}    
    </View>
  ) 
}

//style for the login view
const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#4f83cc",
    justifyContent: "center",
  },
  logErr: {
    backgroundColor: "#4f83cc",
    justifyContent: "center",
    margin: 8,
    padding: 5,
  },
});
//Save email and password locally to login
async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

//alert appears when login or register button clicked
//It lets saving the credentials
const alertSaveCred = (email) =>
  Alert.alert("Nota!", "Vuoi memorizzare le credenziali?", [
    {
      text: "Esci",
      onPress: () => console.log("Cred not saved"),
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => {
        console.log("OK Pressed");
        //Saving the cred locally
        save("email", email);
      },
    },
  ]);
