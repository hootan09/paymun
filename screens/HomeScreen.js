import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Button} from 'react-native-elements'

import TopHeader from '../Components/TopHeader'

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <TopHeader navigation={navigation} title="Home"/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
