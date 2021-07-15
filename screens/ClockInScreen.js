import React, {useState} from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import {Button} from 'react-native-elements'
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import TopHeader from '../Components/TopHeader'

import COLORS from "../constants/Colors";
import IMAGES from "../constants/Images";

const ClockInScreen = ({navigation}) => {

    const [Note, setNote] = useState('');
    const [Pic, setPic] = useState(IMAGES.AVATAR_SERVER);

    const ClockInToServer = () => {
        console.log('ClockInToServer')
    }

    const addImage = async () =>{
        console.log('addImage');
            let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
            }
        
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) {
                return;
            }
            setPic(pickerResult.uri);
    }

    return (
        <>
            <TopHeader navigation={navigation} title="ClockIn" />
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Input placeholder='Notes' label="Note:" value={Note} onChangeText={text =>setNote(text)} multiline={true} />
                <Button containerStyle={styles.button, {width:100}}  buttonStyle={{backgroundColor: COLORS.YELLOW}} raised onPress={addImage} title="ChooseImage" />
                <Button containerStyle={styles.button}  buttonStyle={{backgroundColor: COLORS.ACTIVE}} raised onPress={ClockInToServer} title="Submit" />

            </KeyboardAvoidingView>
        </>
    )
}

export default ClockInScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: COLORS.WHITE
    },
    button: {
        width: 300,
        marginTop: 20,
    }
})
