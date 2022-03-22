import NumericInput from "react-native-numeric-input";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import { custom } from "./custom";
export default function SetRep(props){
    return (
        <View style={styles.rowFlex}>
          <Text style={custom.text}>{props.titolo}:</Text>
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
}

const styles=StyleSheet.create({
    numInput: {
        padding: 5,
        margin: 5,
      },
      rowFlex: {
        flexDirection: "row",
      },
})