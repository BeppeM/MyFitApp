import { View, Text, TextInput, StyleSheet } from "react-native";
import { custom } from "../styles/styles.js";
export default function (props) {
  return (
    <View style={styles.container}>
      <Text style={custom.text}>Inserisci {props.desc}:</Text>
      <TextInput
        style={custom.textInput}
        secureTextEntry={props.desc === "password"}
        onChangeText={(txt) => {
          props.onNewValue(txt)
          console.log(txt)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});
