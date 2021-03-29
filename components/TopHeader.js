import React from 'react'
import { Alert, Image, View, Text, TouchableOpacity, Platform } from 'react-native';
import 'react-native-gesture-handler';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Header} from 'react-native-elements'

export default function TopHeader({navigation, title}) {

    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>{navigation.toggleDrawer()} }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            // rightComponent={{ icon: 'home', color: '#fff', onPress:()=>{navigation.replace("Main")} }}
            rightComponent={<CustomMenu
                menutext="Menu"
                menustyle={{marginRight: 14}}
                textStyle={{color: 'white'}}
                navigation={navigation}
                isIcon={true}
              />}
        />
    )
}

const CustomMenu = (props) => {
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
            <TouchableOpacity onPress={() => _menu.show()}>
              <Image
                source={{
                  uri:
                    'https://reactnativecode.com/wp-content/uploads/2020/12/menu_icon.png',
                }}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ) : (
            <Text
              onPress={() => _menu.show()}
               style={props.textStyle}>
              {props.menutext}
            </Text>
          )
        }>
        <MenuItem onPress={() => {props.navigation.navigate("Profile")}}>
          Settings
        </MenuItem>

        <MenuItem disabled>Disabled Menu Item 2</MenuItem>

        <MenuDivider />

        <MenuItem onPress={LogOut}>
          Logout
        </MenuItem>

      </Menu>
    </View>
  );
};
