import React, {useLayoutEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon} from 'react-native-elements';

import TestScreen from './TestScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            // title: "",
            headerStyle: { backgroundColor: '#fff'},
            headerTitleStyle: { Color: "black"},
            headerTintColor: "black",
            headerLeft: () => {
                <View style={{marginLeft: 20}}>
                    <Icon name='menu' color='#517fa4' />
                </View>
            }
        })
    }, [navigation]);

    function Home({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
          </View>
        );
      }

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="TestScreen" component={TestScreen} />
        </Drawer.Navigator>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
