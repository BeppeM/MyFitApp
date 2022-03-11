import {View, Text, TextInput, StyleSheet} from 'react-native';
import Form from '../Components/Form';
import {appContext} from '../App.js';
import {useState, useContext} from 'react';
import {Button} from 'react-native-elements';
import {custom, buttonStyle} from '../Components/custom.js';
import {auth} from '../firebase.js';
import {handleLogin} from '../firebase.js';
//Simple data to verify the correct navigation
let users = require('../users.json');

export default function Login({navigation}){
    //setEmail from the context
    const {email, setEmail} = useContext(appContext);
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
                    handleLogin(email, password).then((userCredential) => {
                        // Signed in 
                        //const user = userCredential.user;
                        navigation.replace("MyTrainings");
                        // ...
                    })
                    .catch((error) => {
                        //const errorCode = error.code;
                        //const errorMessage = error.message;
                        setLogErr("Errore, credenziali errate. Riprova oppure registrati");
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
    }
});