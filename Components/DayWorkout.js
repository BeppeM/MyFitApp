import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { custom } from './custom';
import { Esercizio } from './Esercizio';

export function DayWorkout(props){
    return (
        <View style={styles.dayView}>
            <Text style={custom.text}>Giorno {props.day}:</Text>
            <Esercizio idx="1"/>
            <Button
            style={styles.bottone}
            title="Aggiungi nuovo esercizio"
            />
        </View>
    )
}

const styles= StyleSheet.create({
    dayView:{
        flex: 1,
        backgroundColor: '#0d47a1',
        borderWidth: 1,
        padding: 5,
        margin: 5,
        marginBottom: 5,
        borderRadius: 8,
    },
    bottone: {
        backgroundColor: '#4a0072',
    }
})