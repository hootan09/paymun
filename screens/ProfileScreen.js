import React, {useState} from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Text, Avatar, Input, Button } from 'react-native-elements'

const ProfileScreen = ({navigation, route}) => {
    
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitProfile = () => {
        if(password != confirmPassword){
            alert('Password & Confirm Password Did Not Match!');
            return;
        }
        console.log('submitProfile')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text h3>User Profile</Text>
            <Text h5>PhoneNumber: {route?.params?.phoneNumber}</Text>
            <Avatar
                containerStyle={styles.avatar}
                rounded
                size="xlarge"
                source={{
                    uri:
                    'https://www.clipartmax.com/png/small/268-2688863_face-head-male-man-person-profile-silhouette-profile-silhouette.png',
                }}
                activeOpacity={0.7}
                onPress={() => console.log("Works!")}
            >
            <Avatar.Accessory size="medium">
                <Avatar rounded icon={{ name: 'home' }} />
            </Avatar.Accessory>
            </Avatar>
            <Input style={styles.inputContainer} placeholder="Password:" secureTextEntry type="text" value={password} onChangeText={text => setPassword(text)} />
            <Input style={styles.inputContainer} placeholder="Confirm Password:" secureTextEntry type="text" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />
            
            <View style={{ height: 50}} />

            <Button containerStyle={styles.button} raised onPress={submitProfile} title="Submit" />

        </KeyboardAvoidingView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: 'white'
    },
    avatar:{
        padding: 10
    },
    inputContainer:{
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
