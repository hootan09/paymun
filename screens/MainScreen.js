import React, {useLayoutEffect} from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Alert, Platform } from 'react-native';

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

    const LogOut = () =>{
        function logOutLogic(){
            navigation.replace("SignIn");
        }
        if(Platform.OS == 'android' || Platform.OS == 'ios'){
            Alert.alert(
                "LogOut",
                "Do You Want to LogOut?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => logOutLogic() }
                ],
                { cancelable: false }
              );
        }else{
            logOutLogic();
        }
    }

    return (
        <Drawer.Navigator drawerContent={props => {
            return (
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="Logout" onPress={LogOut} />
              </DrawerContentScrollView>
            )
          }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Test" component={TestScreen} />
        </Drawer.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({})
