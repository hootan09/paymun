import React from 'react'
import { StyleSheet  } from 'react-native'
import {Header} from 'react-native-elements'

export default function TopHeader({navigation, title}) {

    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>{navigation.toggleDrawer()} }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress:()=>{navigation.replace("Main")} }}
        />
    )
}

const styles = StyleSheet.create({})
