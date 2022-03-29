import {View, Text, TextInput, StyleSheet} from 'react-native';
import {custom} from './custom.js';
export default function(props){
    return(
        <View style={styles.container}>
            <Text style={custom.text}>Inserisci {props.desc}:</Text>
            <TextInput style={styles.textInput} secureTextEntry={props.desc === "password"}
            onChangeText={txt => props.onNewValue(txt)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        borderColor: 'white',
        borderWidth: 1,
        alignSelf: 'flex-start',
        width: "100%",
        padding: 5,
        borderRadius: 5,
    },
    container: {
        margin: 5,
    }
});