import React, {useState, useContext, useEffect} from 'react'
import { Alert, Image, View, Text, TouchableOpacity, Platform } from 'react-native';
import 'react-native-gesture-handler';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Header, Avatar, Icon} from 'react-native-elements'

import AsyncStorage from "@react-native-async-storage/async-storage";

import { TokenContext } from './TokenContext'; "./TokenContext"

import { POST, URLS } from '../services/paymunService';

import IMAGES from '../constants/Images';
import COLORS from "../constants/Colors";

export default function TopHeader({navigation, title}) {

    return (
        <Header
        leftComponent={{ icon: 'menu', color: COLORS.BLACK, onPress:()=>{navigation.toggleDrawer()} }}
            centerComponent={{ text: title, style: { color: COLORS.WHITE } }}
            // rightComponent={{ icon: 'home', color: '#fff', onPress:()=>{navigation.replace("Main")} }}
            rightComponent={
                <View style={{flexDirection:'row'}}>
                    {/* <TaskMenu
                        menutext="Tasl"
                        menustyle={{marginRight: 24}}
                        textStyle={{color: COLORS.WHITE}}
                        navigation={navigation}
                        isIcon={true}
                    /> */}
                    <UserMenu
                        menutext="User"
                        menustyle={{marginRight: 14}}
                        textStyle={{color: COLORS.WHITE}}
                        navigation={navigation}
                        isIcon={true}
                    />
                </View>
            }
        />
    )
}

const UserMenu = (props) => {

  //context
  const {storedToken, setStoredToken} = useContext(TokenContext);
  const [avatar, setAvatar] = useState(IMAGES.AVATAR);
  
  useEffect(() => {
      POST(URLS.PROFILE, {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + storedToken 
      }, {})
      .then(res=>{
        if(!res.result.success){
          Alert.alert('error in get profile, ',res.result.message);
        }else{
          // console.log("user:", res.user)
          //set avatar to user
        }
      })
      .catch (error => console.log(error))
}, []);
  

  
    let _menu = null;

  const LogOut = () =>{
    
    function logOutLogic(){
        AsyncStorage.removeItem("Token")
        .then(()=>{
          // props.navigation.replace("SignIn");
          setStoredToken("");
        })
        .catch(err => console.log(err));
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
              { text: "OK", onPress: () => {
                _menu.hide();
                logOutLogic()
              }

               }
            ],
            { cancelable: false }
          );
    }else{
        logOutLogic();
    }
}

  return (
    <View style={props.menustyle}>
      <Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <Avatar
                    rounded
                    size="small"
                    source={{
                        uri: IMAGES.AVATAR
                    }}
                    activeOpacity={0.7}
                    onPress={() => _menu.show()}
                ></Avatar>
          ) : (
            <Text
              onPress={() => _menu.show()}
               style={props.textStyle}>
              {props.menutext}
            </Text>
          )
        }>
        <MenuItem onPress={() => {
          _menu.hide();
          props.navigation.navigate("Profile")
          }}>
            <View style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Icon
                    size={23}
                    type='font-awesome'
                    name={Platform.OS === 'android' ? 'cog' : 'cog'}>
                </Icon>
                <Text style={{
                        fontSize: 16,
                        color: COLORS.BLACK
                    }}> Settings</Text>
            </View>
        </MenuItem>

        <MenuItem disabled>Disabled Menu Item 2</MenuItem>

        <MenuDivider />

        <MenuItem onPress={LogOut}>
        <View style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Icon
                    size={23}
                    type='font-awesome'
                    name={Platform.OS === 'android' ? 'sign-out' : 'sign-out'}>
                </Icon>
                <Text style={{
                        fontSize: 16,
                        color: COLORS.BLACK
                    }}> Logout</Text>
            </View>
        </MenuItem>

      </Menu>
    </View>
  );
};

// const TaskMenu = (props) => {

//     let _menu = null;
//   return (
//     <View style={props.menustyle}>
//       <Menu
//         ref={(ref) => (_menu = ref)}
//         button={
//           props.isIcon ? (
//             <Icon
//             name='plus-circle'
//             type='font-awesome'
//             color={COLORS.BLACK}
//             size={35}
//             onPress={() => _menu.show()} />
//           ) : (
//             <Text
//               onPress={() => _menu.show()}
//                style={props.textStyle}>
//               {props.menutext}
//             </Text>
//           )
//         }>
//         <MenuItem onPress={() => {props.navigation.navigate("Profile")}}>
//           Test 1
//         </MenuItem>

//         <MenuItem disabled>Disabled Menu Item 2</MenuItem>

//         <MenuDivider />

//         <MenuItem onPress={()=>{}}>
//           Test 3
//         </MenuItem>

//       </Menu>
//     </View>
//   );
// };

