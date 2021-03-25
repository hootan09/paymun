import React from 'react'
import { StyleSheet, View } from 'react-native'
import TopHeader from '../components/TopHeader';
import {Button} from 'react-native-elements'

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <TopHeader navigation={navigation} title="Home"/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
