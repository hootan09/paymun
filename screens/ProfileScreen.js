import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text>User Profile</Text>
            
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
