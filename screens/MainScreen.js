import React, {useLayoutEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';


import TestScreen from './TestScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';


const Drawer = createDrawerNavigator();

const MainScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // title: "",
            // headerStyle: { backgroundColor: '#fff'},
            // headerTitleStyle: { Color: "black"},
            // headerTintColor: "black",
            // headerLeft: () => (
            //     <Icon onPress={() => navigation.toggleDrawer()} containerStyle={{paddingLeft:20}} name='menu' color='#517fa4' />
            // )
        })
    }, [navigation]);

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Test" component={TestScreen} />
        </Drawer.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({})
