import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {custom} from '../Components/custom.js';
import Form from '../Components/Form';
import { Button } from 'react-native-elements';
import { useState } from 'react';
import { DayWorkout } from '../Components/DayWorkout.js';
export default function AddWorkout(props){
    const [days, setDays]= useState(0);
    return(
        <View style={custom.cardContainer}>
        <ScrollView>
        <View style={custom.cardContainer}>
        <Form desc="titolo workout"/>
        <DayWorkout day="1"/>
        <Button
            title="AddDay"
            onPress={() => setDays(days+1)}
        />
        </View>
        <Button
            title="Aggiungi workout"
            onPress={() => console.log("Workout aggiunto")}
        />
        </ScrollView>
        </View>
    )
}