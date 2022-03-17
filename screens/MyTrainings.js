import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
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
    const [workouts, setWorkouts] = useState([]);

//useEffect performed only on mounts of the component
    useEffect(async () =>{      
      //Getting data from firestore
      console.log("Fetching workouts of: " + email + " from firestore")
      reading(email, setWorkouts);      
      //Rerender
      console.log("Bella ciao!!");
    }, []);
    return (
            <View style={custom.cardContainer}>
                <Text>Ci siamo {email}</Text>
                <ScrollView>
                  {workouts===[] 
                    ? <Text>Loading...</Text> 
                    : <Workouts workouts={workouts}/>
                  }                         
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
  const reading= (email, setWorkouts) => readWorkouts(queryWorkout(email))
    .then((snapshot) =>{
      let tmp=[]
        snapshot.docs.forEach((workout) =>{
            tmp.push({
                ...workout.data(),
                id: workout.id,                 
                });
        });        
        console.log("Finished fetching workouts of: " + email);
        console.log(tmp);
//Fetch done, i rerender the whole component
        setWorkouts(tmp);
    }).catch((err) => console.log(err));

function Workouts({workouts}){
  return (
    workouts.map( (workout) =>
      <TouchableOpacity
      onPress={() =>{console.log("You clicked!!")}}
      underlayColor= 'white'
      >
        <Card 
          uuid={workout.id}
          title={workout.title}
          goal={workout.goal}
        />
      </TouchableOpacity>
    ))
}
    