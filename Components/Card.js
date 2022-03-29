import {View, Text, TextInput, StyleSheet} from 'react-native';
import {custom, buttonStyle} from './custom.js';
import {Button} from 'react-native-elements';

//Card for showing all user workouts stored on firestore
export default function Card(props){
    return (
        <View style={custom.card} key={props.uuid}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.textStyle}>{props.goal}</Text>
            <Button
                title="Elimina"
                titleStyle={{ fontWeight: 'bold' }}
                {...containerStyle}
                {...buttonStyle}/>
            <Button
                title="Modifica"
                titleStyle={{ fontWeight: 'bold' }}
                {...containerStyle}
                {...buttonStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        margin: 8,
        fontSize: 20,
        alignSelf: 'center',
    }
})


//Button style for the inner container
const containerStyle={containerStyle: {
    alignSelf: 'center',
    width: '50%',
  }}
