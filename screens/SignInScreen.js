import React, {useState, useEffect, useContext} from 'react'

import { StyleSheet, Text, View, KeyboardAvoidingView, Alert} from 'react-native'
import { Button, Input, Image } from 'react-native-elements'

import AsyncStorage from "@react-native-async-storage/async-storage";

import {TokenContext} from "../Components/TokenContext";

import IMAGES from "../constants/Images";
import FONTS from "../constants/Fonts";
import COLORS from "../constants/Colors";
import {post} from '../services/paymunService';

const SignInScreen = ({navigation}) => {
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    //context
    const {storedToken, setStoredToken} = useContext(TokenContext);

    // useEffect(() => {
    //     //already signin and have token
    //     // if(have token){
    //         // navigation.replace("Home");
    //         // navigation.replace("Profile");
    //     // }
    // }, []);

    const signIn = () =>{
        console.log(phoneNumber, password);
        // navigation.replace("Main");
        
        let token = {} //from api
        
        AsyncStorage.setItem("Token", JSON.stringify(token))
        .then(()=>{
            //the stack navigator automatically send to main screen
            setStoredToken(token);
        })
        .catch(err => {
            console.log(err);
            Alert.alert('Error in Sigin api call');
        })

    }

    const postData = async() => {
        try {
          let res = await post();
          Alert.alert('onPress');
        } catch (e) {
          console.error(e);
        }
      }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={{uri: IMAGES.PAYMUN}} style={{ width:200, height: 90,}} />
            <View style= {styles.inputContainer}>
                <Input placeholder= "Phone Number:" autoFocus value={phoneNumber} onChangeText={text =>setPhoneNumber(text)}/>
                <Input placeholder= "Password:" type="password" secureTextEntry value={password} onChangeText={text =>setPassword(text)}/>
                <View style={{ height: 50}} />
            </View>

            <Button containerStyle={styles.button} onPress={()=> postData()} title="test" />
            <Button containerStyle={styles.button} onPress={signIn} title="SignIn" />
            <Button containerStyle={styles.button} onPress={()=>{navigation.navigate('SignUp')}} type="outline" title="SignUp" />
        </KeyboardAvoidingView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.WHITE,
        
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10,
        fontFamily: FONTS.EXTRA_BOLD,
    }
})
