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
  //setEmail from the context because we need it for other screens
  const glbEmail = useContext(appContext);

  const [credLogin, setCredLog] = useState({
    email: "",
    password: ""
  });
  //error in login
  const [logErr, setLogErr] = useState("");

/*  //Try to get credentials every time the component is mounted
// TO DELETEEEEE
  useEffect(() => {
    getValueFor("email").then((resEmail) => {
      console.log(resEmail);
    });
    return () => {
      console.log("unmounted");
    };
  }, []);
*/
  //RETURN COMPONENT
  return (
    <View style={custom.background}>
    {console.log(credLogin.email + " " + credLogin.password)}
      <Form
        desc="email"
        val={credLogin.email}
        onNewValue={(v) => {
          setCredLog({ email: v, password: credLogin.password})
        }}
      />
      <Form
        desc="password"
        val={credLogin.password}
        onNewValue={(v) => {
          setCredLog({ password: v, email: credLogin.email})
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
          handleLogin(credLogin.email, credLogin.password)
            .then((userCredential) => {// Signed in 
              //setting the global email  
              glbEmail.current = credLogin.email
              //saving credentials locally                         
              alertSaveCred(credLogin);              
              navigation.replace("MyTrainings");
            })
            .catch((error) => {
              setLogErr(
                error
                //"Errore, credenziali errate. Riprova oppure registrati"
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
          handleReg(credLogin.email, credLogin.password)
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
const alertSaveCred = (credLogin) =>
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
        //Saving the cred onto the local storage
        save("email", credLogin.email);
        save("pwd", credLogin.password);
      },
    },
  ]);
