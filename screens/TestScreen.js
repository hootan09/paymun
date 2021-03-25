import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TestScreen = ({navigation}) => {
    return (
        <View>
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer in Test Screen" />
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({})
