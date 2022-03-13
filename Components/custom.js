/**
 * Style of components!!
 *  */ 
import {StyleSheet} from 'react-native';

export const custom = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f83cc',
        justifyContent: 'center',
        padding: 5,
    },
    text:{
        fontSize: 20,
        margin: 8,
        color: 'white',
    },
//Button style for the inner container
    containerStyle: {
        alignSelf: 'center',
        width: '50%',
      },
//Trainings card      
    cardContainer:{
        flex: 1,
        backgroundColor: '#4f83cc',
        padding: 5,
    },
    card:{
        backgroundColor: '#5472d3',
        margin: 8,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    }
});

//Button style
export const buttonStyle= {buttonStyle: {
    backgroundColor: '#01579b',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    margin: 8,
  }}