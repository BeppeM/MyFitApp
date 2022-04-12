import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import Form from "../Components/Form";
import { appContext } from "../App.js";
import { useState, useContext } from "react";
import * as SecureStore from "expo-secure-store";
//style
import { custom } from "../styles/styles.js";
//firebase authentication
import { handleLogin, handleReg, signInWithGoogle } from "../services/firebase.js";

export default function Login({ navigation }) {
  //setEmail from the context because we need it for other screens
  const glbEmail = useContext(appContext);

  const [credLogin, setCredLog] = useState({
    email: "",
    password: "",
  });
  //error in login
  const [logErr, setLogErr] = useState("");

  //RETURN COMPONENT
  return (
    <View style={custom.background}>
      {console.log(credLogin.email + " " + credLogin.password)}
      <Form
        desc="email"
        val={credLogin.email}
        onNewValue={(v) => {
          setCredLog({ email: v, password: credLogin.password });
        }}
      />
      <Form
        desc="password"
        val={credLogin.password}
        onNewValue={(v) => {
          setCredLog({ password: v, email: credLogin.email });
        }}
      />

      <View>
        <Text style={custom.text}>{logErr}</Text>
      </View>

      <Pressable
        style={{ ...custom.buttonStyle }}
        onPress={() => {
          console.log("Credenziali: ");
          console.log(credLogin);
          handleLogin(credLogin.email, credLogin.password)
            .then((userCredential) => {
              // Signed in
              //setting the global email
              //console.log(userCredential)
              glbEmail.current = credLogin.email;
              //saving credentials locally
              alertSaveCred(credLogin);
              navigation.replace("MyTrainings");
            })
            .catch((error) => {
              setLogErr("Email e/o password sbagliati. Riprovare!");
            });
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center" }}>Login</Text>
      </Pressable>

      <Pressable
        style={{ ...custom.buttonStyle }}
        onPress={() => {
          handleReg(credLogin.email, credLogin.password)
            .then((userCredential) => {
              //setting the global email
              glbEmail.current = credLogin.email;
              // Signed up
              //const user = userCredential.user;
              navigation.replace("MyTrainings");
            })
            .catch((error) => {
              setLogErr(error.message);
            });
        }}
      >
        <Text style={{ ...custom.text, alignSelf: "center" }}>Registrati</Text>
      </Pressable>      
    </View>
  );
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
