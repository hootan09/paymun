import React, {useState} from 'react'
import { Alert, Image, View, Text, TouchableOpacity, Platform } from 'react-native';
import 'react-native-gesture-handler';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Header, Avatar, Icon} from 'react-native-elements'

export default function TopHeader({navigation, title}) {

    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>{navigation.toggleDrawer()} }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff', onPress:()=>{navigation.replace("Main")} }}
            rightComponent={
                <View style={{flexDirection:'row'}}>
                    <TaskMenu
                        menutext="Tasl"
                        menustyle={{marginRight: 24}}
                        textStyle={{color: 'white'}}
                        navigation={navigation}
                        isIcon={true}
                    />
                    <UserMenu
                        menutext="User"
                        menustyle={{marginRight: 14}}
                        textStyle={{color: 'white'}}
                        navigation={navigation}
                        isIcon={true}
                    />
                </View>
            }
        />
    )
}

const UserMenu = (props) => {
  
    const [avatar, setAvatar] = useState('https://www.clipartmax.com/png/small/268-2688863_face-head-male-man-person-profile-silhouette-profile-silhouette.png');
  
    let _menu = null;

  const LogOut = () =>{
    
    function logOutLogic(){
        props.navigation.replace("SignIn");
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
    <View style={props.menustyle}>
      <Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <Avatar
                    rounded
                    size="small"
                    source={{
                        uri: avatar
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
        <MenuItem onPress={() => {props.navigation.navigate("Profile")}}>
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
                        color: "black"
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
                        color: "black"
                    }}> Logout</Text>
            </View>
        </MenuItem>

      </Menu>
    </View>
  );
};

const TaskMenu = (props) => {

    let _menu = null;
  return (
    <View style={props.menustyle}>
      <Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <Icon
            name='plus-circle'
            type='font-awesome'
            color='#28a745'
            size={35}
            onPress={() => _menu.show()} />
          ) : (
            <Text
              onPress={() => _menu.show()}
               style={props.textStyle}>
              {props.menutext}
            </Text>
          )
        }>
        <MenuItem onPress={() => {props.navigation.navigate("Profile")}}>
          Test 1
        </MenuItem>

        <MenuItem disabled>Disabled Menu Item 2</MenuItem>

        <MenuDivider />

        <MenuItem onPress={()=>{}}>
          Test 3
        </MenuItem>

      </Menu>
    </View>
  );
};

