import * as React from "react";
import styles from "./style.js"
import Home from "../Home/Home.js"
import Header from "../Header/Header";
import { View, Text, Image,TouchableOpacity} from "react-native";
import Menu from "../Menu/Menu.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
   
    return( 
    
    <View style={styles.View}>
        
        <Home/>
        
    </View>
        
    )
}
