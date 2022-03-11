import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import {appContext} from '../App.js';
export default function MyTrainings(){
    const {email} = useContext(appContext);
    return (
        <View>
            <Text>Ci siamo {email}</Text>
        </View>
    )
}