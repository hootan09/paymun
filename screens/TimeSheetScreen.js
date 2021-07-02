import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import {Button} from 'react-native-elements'

import TopHeader from "../Components/TopHeader";
import Clock from '../Components/Clock' 

const TimeSheetScreen = ({navigation}) => {

    const ClockIn = () =>{

    }

    return (
        <>
            {navigation.toggleDrawer && <TopHeader navigation={navigation} title="Time Sheet" />}
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Clock navigation={navigation}/>
                <Button containerStyle={styles.button}  buttonStyle={{backgroundColor:'#0099a8'}} raised onPress={ClockIn} title="ClockIn" />
            </KeyboardAvoidingView>
        </>
    )
}

export default TimeSheetScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 20,
    }
})
