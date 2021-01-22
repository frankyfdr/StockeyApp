import styles from "./styleDrawerC.js"
import * as React from "react";
import {Drawer}  from 'react-native-paper';
import { View, Text, Image,TouchableOpacity} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

export default function DrawerContent(props) {
  return (
    <View style={styles.Main}>
       
            <View style={styles.HeaderTop}>
                <Image  style={styles.Image} source={require('../img/logo5.jpeg')} />
            </View>
        
        <Drawer.Section style={styles.TopDrawerSection}>
            <DrawerItem 
            style={styles.DrawerItem}
                label="Home"
                onPress={() => {props.navigation.navigate('Main')}}
                />
                <DrawerItem 
                style={styles.DrawerItem}
                label="Login"
                onPress={() => {props.navigation.navigate('Login')}}
                />
        </Drawer.Section>
        <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                
                    label="Sign Out"
                />
            </Drawer.Section>
   </View>
  );
}