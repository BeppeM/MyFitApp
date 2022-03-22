import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input'
import { custom } from './custom';
export function Esercizio(props){
    return (
        <TouchableOpacity>
        <View style={styles.exerciseView}>
            <Text style={[custom.text, {alignSelf: 'center'}]}>Esercizio {props.idx}:</Text>
            <Text style={custom.text}>Nome:</Text>
            <TextInput
            style={styles.textInput}
            placeholder='push ups'
            />
            <View style={styles.rowFlex}>
            <Text style={custom.text}>Set: </Text>
            <NumericInput  
            minValue={0}
            rounded
            containerStyle={styles.numInput}
            onChange={value => console.log(value)} />
            </View>
            <View style={styles.rowFlex}>
            <Text style={custom.text}>Rep:</Text>
            <NumericInput  
            minValue={0}
            containerStyle={styles.numInput}
            rounded
            onChange={value => console.log(value)} />
            </View>
            <Text style={custom.text}>Descrizione:</Text>
            <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={4}
            placeholder=''
            />
        </View>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    exerciseView:{
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        marginBottom: 5,
        borderRadius: 5,
    },
    textInput:{
        borderColor: 'white',
        borderWidth: 1,
        //alignSelf: 'flex-start',
        width: "95%",
        margin: 8,
        padding: 5,
        borderRadius: 5,
    },
    numInput: {
        padding: 5,
        margin: 5,
    }, 
    rowFlex:{
        flexDirection: 'row',
    }
})