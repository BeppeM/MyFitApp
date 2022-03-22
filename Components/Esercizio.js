import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Form from "./Form";
import { Button } from "react-native-elements";
import { custom } from "./custom";
import SetRep from "./SetRep";
export function Esercizio(props) {
  //nome esercizio
  const [nomeEs, setNome] = useState("");
  //numero di serie
  const [numSerie, setNumSerie] = useState(0);
  //numero di ripetizioni
  const [repNum, setRepNum] = useState(0);
  //descrizione allenamento
  const [description, setDescription] = useState(0);
  const password="";
  return (
    <TouchableOpacity>
      <View style={styles.exerciseView}>
        <Text style={[custom.text, { alignSelf: "center" }]}>
          Esercizio {props.idx}:
        </Text>
        <Text style={custom.text}>Titolo esercizio:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            console.log(text);
            setNome(text);
          }}
        />

        <SetRep titolo="Set " setValue={setNumSerie}/>
        <SetRep titolo="Rep" setValue={setRepNum}/>

        <Text style={custom.text}>Descrizione:</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          placeholder=""
          onChangeText={(text) => setDescription(text)}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  exerciseView: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  textInput: {
    borderColor: "white",
    borderWidth: 1,
    //alignSelf: 'flex-start',
    width: "95%",
    margin: 8,
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
});

const Ninput = (props) => {
  return (
    <View style={styles.rowFlex}>
      <Text style={custom.text}>Rep:</Text>
      <NumericInput
        minValue={0}
        containerStyle={styles.numInput}
        rounded
        onChange={(value) => {
          console.log(value);
          props.setValue(value);
        }}
      />
    </View>
  );
};
