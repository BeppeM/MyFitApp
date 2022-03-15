import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useContext, useReducer } from 'react';
import {appContext} from '../App.js';
import {custom} from '../Components/custom.js';
import Card from '../Components/Card.js';
import uuid from 'react-native-uuid';
import { FAB } from 'react-native-paper';
import { queryWorkout, readWorkouts } from '../firebase.js';
import { doc } from 'firebase/firestore';

//let trainings = require('../allenamenti.json');
export default function MyTrainings(){
    const {email} = useContext(appContext);
    let workouts = [];
    readWorkouts(queryWorkout(email))
    .then((snapshot) =>{
        snapshot.docs.forEach((workout) =>{
            workouts.push({
                ...workout.data(),
                id: workout.id,                 
                });
        })    
        console.log(workouts);
    }).catch((err) => console.log(err));
    return (
            <View style={custom.cardContainer}>
                <Text>Ci siamo {email}</Text>
                <ScrollView>
                    
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
      backgroundColor: '#002f6c',
    },
  })

  /*
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
   */