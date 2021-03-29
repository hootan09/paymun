import React, {useLayoutEffect} from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Alert, Platform, View } from 'react-native';
import { Image, Icon } from "react-native-elements";

import TestScreen from './TestScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import TimeSheetScreen from './TimeSheetScreen';

import logoblue from "../assets/logoblue.png";

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

    // const LogOut = () =>{
    //     function logOutLogic(){
    //         navigation.replace("SignIn");
    //     }
    //     if(Platform.OS == 'android' || Platform.OS == 'ios'){
    //         Alert.alert(
    //             "LogOut",
    //             "Do You Want to LogOut?",
    //             [
    //               {
    //                 text: "Cancel",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //               },
    //               { text: "OK", onPress: () => logOutLogic() }
    //             ],
    //             { cancelable: false }
    //           );
    //     }else{
    //         logOutLogic();
    //     }
    // }

    const DrawerContent = (props) => (
      <View>
        <View
          style={{
            backgroundColor: '#f50057',
            height: 140,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 30 }}>
            Header
          </Text>
        </View>
        <DrawerItems {...props} />
      </View>
    )

    return (
        <Drawer.Navigator drawerContent={props => {
            return (
              <DrawerContentScrollView style={styles.sideBar} {...props}>
                <View style={{flex:1,justifyContent: 'flex-start', alignItems: 'center'}}>
                  <Image source={logoblue} style={{ width:200, height: 90 }} />
                </View>
                <DrawerItemList styles={styles.navItem} {...props} />
                {/* <DrawerItem styles={styles.navItem} label="Logout" onPress={LogOut} icon={() => <Icon
                size={23}
                name={Platform.OS === 'android' ? 'star' : 'star'}></Icon>
                } /> */}
              </DrawerContentScrollView>
            )
          }}
          drawerContentOptions={{
            activeTintColor: '#333e48',
            itemStyle: { marginVertical: 1 },
          }}>
            <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              drawerIcon: () => <Icon
                size={23}
                name={Platform.OS === 'android' ? 'home' : 'home'}></Icon>
            }} />
            <Drawer.Screen 
              name="TimeSheet" 
              component={TimeSheetScreen}  
              options={{
                drawerIcon: () => <Icon
                  size={23}
                  name={Platform.OS === 'android' ? 'star' : 'star'}></Icon>
              }} />
            <Drawer.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              drawerIcon: () => <Icon
                size={23}
                name={Platform.OS === 'android' ? 'star' : 'star'}></Icon>
            }} />
            <Drawer.Screen 
            name="Test" 
            component={TestScreen}
            options={{
              drawerIcon: () => <Icon
                size={23}
                name={Platform.OS === 'android' ? 'star' : 'star'}></Icon>
            }} />
        </Drawer.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({
  sideBar:{
    backgroundColor: 'rgba(255,255,255, .7)',
  },
  navItem: {
    
  }
})
