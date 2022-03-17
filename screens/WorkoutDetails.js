/**
 * Screen used to show workout details
*/
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { custom } from '../Components/custom';
export default function WorkoutDetails({navigation, route}){
    const { workout } = route.params;
//workout details passed 
    console.log("Workout details: ");
    console.log(workout);
    return(
        <View style={custom.container}>
            <Text>{workout.title}</Text>
            <Text>{workout.goal}</Text>    
        </View>
    )
}