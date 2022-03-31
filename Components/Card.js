import {View, Text, TextInput, StyleSheet} from 'react-native';
import {custom, buttonStyle} from '../styles.js';
import {Button} from 'react-native-elements';

//Card for showing all user workouts stored on firestore
export default function Card({custom, ...props}){
    return (
        <View style={custom.cardContainer} key={props.uuid}>
            <Text style={{style: custom.text, alignSelf: 'center'}}>{props.title}</Text>
            <Text style={{style: custom.text, alignSelf: 'center'}}>{props.goal}</Text>
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

//Button style for the inner container
const containerStyle={containerStyle: {
    alignSelf: 'center',
    width: '50%',
  }}
