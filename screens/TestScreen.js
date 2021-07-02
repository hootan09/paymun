import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import TopHeader from '../Components/TopHeader'

const TestScreen = ({navigation}) => {
    return (
        <View>
            <TopHeader navigation={navigation} title="Test"/>
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({})


