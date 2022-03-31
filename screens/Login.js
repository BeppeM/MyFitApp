import {View, Text, TextInput, StyleSheet} from 'react-native';
import Form from '../Components/Form';
import {appContext} from '../App.js';
import {useState, useContext} from 'react';
import {Button} from 'react-native-elements';
//style
import {custom, buttonStyle} from '../styles.js';
//firebise authentication
import {auth} from '../firebase.js';
import {handleLogin, handleReg} from '../firebase.js';
//Simple data to verify the correct navigation
let users = require('../users.json');

export default function Login({navigation}){
    //setEmail from the context
    const {email, setEmail} = useContext(appContext);
    
    const [password, setPwd] = useState("");
    //error in login
    const [logErr, setLogErr] = useState("");
    
    return(
        <View style={custom.container}>
            <Form desc="email" val={email}
                onNewValue={ v =>{setEmail(v);}}
            />
            <Form desc="password" val={password}
                  onNewValue={ v =>{setPwd(v);}}
            />
            <View>
                <Text style={custom.text}>{logErr}</Text>
            </View>
            <Button
                title="Login"
                titleStyle={{ fontWeight: 'bold' }}
                {...containerStyle}
                {...buttonStyle}
                onPress= {() =>{
                    handleLogin(email, password).then((userCredential) => {
                        // Signed in                         
                        navigation.replace("MyTrainings");                    
                    })
                    .catch((error) => {
                        //const errorCode = error.code;
                        //const errorMessage = error.message;
                        setLogErr("Errore, credenziali errate. Riprova oppure registrati");
                    });
                }}
              />
              <Button
                title="Registrati"
                titleStyle={{ fontWeight: 'bold' }}
                {...containerStyle}
                {...buttonStyle}
                onPress= {() =>{
                    handleReg(email, password).then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        navigation.replace("MyTrainings");
                    })
                    .catch((error) => {
                        setLogErr(error.message);
                    });
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
    },
    logErr:{
        backgroundColor: '#4f83cc',
        justifyContent: 'center',
        margin: 8,
        padding:5,
    }
});