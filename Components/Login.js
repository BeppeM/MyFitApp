import {View, Text, TextInput, StyleSheet} from 'react-native';
import Form from './Form';
import {useState} from 'react';
import {Button} from 'react-native-elements';
let data = require('../data.json');
export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPwd] = useState("");
    return(
        <View style={styles.login}>
            <Form value="email" val={email}
            pippo={ v =>{
                setEmail(v);
            }}
            />
            <Form value="password" change={setPwd}/>
            <Button
                title="LOG IN"
                containerStyle={{
                  alignSelf: 'center',
                  width: '50%',
                }}
                titleStyle={{ fontWeight: 'bold' }}
                {...buttonStyle}
                onPress= {() =>{
                    //setPippo("Bella broooo");
                    //Replacing screen after the login
                        navigation.replace("MySchedule");
                }}
              />
        </View>
    )
}

//Button style
const buttonStyle= {buttonStyle: {
    backgroundColor: '#01579b',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
  }}

const styles = StyleSheet.create({
    login:{
        flex: 1,
        backgroundColor: '#4f83cc',
        justifyContent: 'center',
    }
});