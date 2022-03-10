import {View, Text, TextInput, StyleSheet} from 'react-native';
export default function(props){
    return(
        <View style={styles.formContainer}>
            <Text style={styles.text}>Inserisci {props.value}:</Text>
            <TextInput style={styles.textInput} secureTextEntry={props.value === "password"}
            onChangeText={txt => props.pippo(txt)}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    formContainer: {
        margin: 10,
    },
    textInput:{
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'flex-start',
        width: "95%",
        margin: 8,
        padding: 5,
        borderRadius: 5,
    },
    text:{
        fontSize: 20,
        margin: 8,
        color: 'white',
    }
});