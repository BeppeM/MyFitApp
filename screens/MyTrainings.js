import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import {appContext} from '../App.js';
import {custom} from '../Components/custom.js';
import Card from '../Components/Card.js';
import uuid from 'react-native-uuid';
import { FAB } from 'react-native-paper';
import { queryWorkout, readWorkouts } from '../firebase.js';
import { doc } from 'firebase/firestore';

let workouts = [];
    
//let trainings = require('../allenamenti.json');
export default function MyTrainings(){
    const {email} = useContext(appContext);
    const [loading, setLoading] = useState(false);

    useEffect(async () =>{      
      //Getting data from firestore
      reading(email);      
      //Rerender
      console.log("Bella ciao!!");
    }, [workouts]);
    return (
            <View style={custom.cardContainer}>
                <Text>Ci siamo {email}</Text>
                <ScrollView>
                  {loading && <Workouts/>}                         
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

//Reading all workouts of the user logged in
  const reading= (email) => readWorkouts(queryWorkout(email))
    .then((snapshot) =>{
        snapshot.docs.forEach((workout) =>{
            workouts.push({
                ...workout.data(),
                id: workout.id,                 
                });
        });        
        console.log(workouts);
    }).catch((err) => console.log(err));

function Workouts(){
  return (
    workouts.map( (workout) =>
      <TouchableOpacity
      onPress={() =>{console.log("You clicked!!")}}
      underlayColor= 'white'
      uuid={workout.id}
      >
        <Card 
          title={workout.title}
          goal={workout.goal}
        />
      </TouchableOpacity>
    ))
}
    