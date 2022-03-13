import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useContext } from 'react';
import {appContext} from '../App.js';
import {custom} from '../Components/custom.js';
import Card from '../Components/Card.js';
import uuid from 'react-native-uuid';
import { FAB } from 'react-native-paper';
let trainings = require('../allenamenti.json');
export default function MyTrainings(){
    const {email} = useContext(appContext);
    return (
            <View style={custom.cardContainer}>
                <Text>Ci siamo {email}</Text>
                <ScrollView>
                    {trainings.map( (training) =>
                        <TouchableOpacity
                        onPress={() =>{console.log("You clicked!!")}}
                        underlayColor= 'white'
                        uuid={uuid.v4()}
                        >
                            <Card 
                            title={training.title}
                            goal={training.goal}
                            />
                        </TouchableOpacity>
                    )}
                </ScrollView>
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => console.log('Pressed')}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })