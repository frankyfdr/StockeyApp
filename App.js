import 'react-native-gesture-handler';
import React,{useContext,useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from "./src/components/Header/Header";
import Login from "./src/components/Login/Login.js";
import {MyDrawer} from "./src/screens/Drawer.js"
import DrawerContent from "./src/screens/DrawerContent.js"
import {Context} from "./src/Context.js"

export default function App() {
  const [symList,setSymList] = useState("NFLX");
    return (
      <Context.Provider value={{symList,setSymList}}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </Context.Provider>
  );
}
