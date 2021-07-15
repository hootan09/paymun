import React, {useState} from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Text, Avatar, Input, Button } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import TopHeader from '../Components/TopHeader';

import IMAGES from "../constants/Images";
import COLORS from "../constants/Colors";

const ProfileScreen = ({navigation, route}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [avatar, setAvatar] = useState(IMAGES.AVATAR_SERVER);

    const submitProfile = () => {
        if(password != confirmPassword){
            alert('Password & Confirm Password Did Not Match!');
            return;
        }
        console.log('submitProfile')
        //if update is seccessful then go back to login
        navigation.reset({
            index: 0,
            routes: [{ name: "SignIn" }],
          });

    }

    const addAvatar = async () =>{
        console.log('addAvatar');
            let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
            }
        
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            if (pickerResult.cancelled === true) {
                return;
            }
            setAvatar(pickerResult.uri);
    }

    return (
        <>
        {navigation.toggleDrawer && <TopHeader navigation={navigation} title="Profile"/>}
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text h3>User Profile</Text>
                <Text h5>PhoneNumber: {route?.params?.phoneNumber}</Text>
                <Avatar
                    containerStyle={styles.avatar}
                    rounded
                    size="xlarge"
                    source={{
                        uri: IMAGES.AVATAR_SERVER
                    }}
                    activeOpacity={0.7}
                    onPress={addAvatar}
                >
                <Avatar.Accessory>
                    <Avatar rounded icon={{ name: 'home' }} />
                </Avatar.Accessory>
                </Avatar>
                <Input style={styles.inputContainer} placeholder="Email:" type="mail" disabled={true} value={email} onChangeText={text => setEmail(text)} />
                <Input style={styles.inputContainer} placeholder="Password:" secureTextEntry value={password} onChangeText={text => setPassword(text)} />
                <Input style={styles.inputContainer} placeholder="Confirm Password:" secureTextEntry value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />
                
                <View style={{ height: 50}} />

                <Button containerStyle={styles.button} raised onPress={submitProfile} title="Submit" />
        </KeyboardAvoidingView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: COLORS.WHITE
    },
    avatar:{
        padding: 10,
        width: 200,
        height:200
    },
    inputContainer:{
        width: 300,
        marginTop:10
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
