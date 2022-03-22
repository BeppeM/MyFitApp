import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {custom} from '../Components/custom.js';
import Form from '../Components/Form';
import { Button } from 'react-native-elements';
import { useState } from 'react';
export default function AddWorkout(props){
    const [days, setDays]= useState(0);
    return(
        <View style={custom.cardContainer}>
        <Form
            desc="titolo workout"
        />
        <Button
            title="AddDay"
            onPress={() => setDays(days+1)}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
    }
})