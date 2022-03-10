import {View, Text, TextInput, StyleSheet} from 'react-native';
import Form from './Form';
import {useState} from 'react';
import {Button} from 'react-native-elements';
import {custom, buttonStyle} from './custom.js';
//Simple data to verify the correct navigation
let users = require('../users.json');

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPwd] = useState("");
    //error in login
    const [logErr, setLogErr] = useState("");
    return(
        <View style={styles.login}>
            <Form desc="email" val={email}
                onNewValue={ v =>{setEmail(v);}}
            />
            <Form desc="password" val={password}
                  onNewValue={ v =>{setPwd(v);}}
            />
            <View style={custom.container}>
                <Text style={custom.text}>{logErr}</Text>
            </View>
            <Button
                title="LOG IN"
                titleStyle={{ fontWeight: 'bold' }}
                {...containerStyle}
                {...buttonStyle}
                onPress= {() =>{
                    if((users[0].email === email)&&
                       (users[0].password === password))
                        navigation.replace("MySchedule");
                    else
                        setLogErr("Errore, credenziali errate. Riprova");
                }}
              />
        </View>
    )
}

//Button style for the inner container
const containerStyle={containerStyle: {
    alignSelf: 'center',
    width: '50%',
  }}

//style for the login view
const styles = StyleSheet.create({
    login:{
        flex: 1,
        backgroundColor: '#4f83cc',
        justifyContent: 'center',
    }
});