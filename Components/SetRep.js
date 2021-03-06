//Component for numericInput for sets and reps of an excercise
//Usato solo nel componente Esercizio!
import NumericInput from "react-native-numeric-input";
import {
    StyleSheet,
    Text,    
    View,    
  } from "react-native";
import { custom } from "./custom";

/**
 * sr=0 -> NumeriInput for set
 * sr=1 -> NumeriInput for rep
 */
export default function SetRep({exercise, sr, ...props}){
    return (
        <View style={styles.rowFlex}>
          <Text style={custom.text}>{props.titolo}:</Text>
          <NumericInput
            textColor= 'white'
            rightButtonBackgroundColor='#EEC139'
            leftButtonBackgroundColor='#EEC139'
            minValue={0}
            containerStyle={styles.numInput}
            rounded
            onChange={(value) => {
              //console.log(value);
              sr === 0 ?
              props.setValue({...exercise, setNum: value})
              :
              props.setValue({...exercise, repNum: value})
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