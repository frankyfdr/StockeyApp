import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from "./src/components/Header/Header";
import Login from "./src/components/Login/Login.js";
import {MyDrawer} from "./src/screens/Drawer.js"
import DrawerContent from "./src/screens/DrawerContent.js"

export default function App() {

  return (


  <NavigationContainer   >
      <MyDrawer />
  </NavigationContainer>
    

  );
}
/*
    <View style={styles.View}>
      <NavigationContainer style={styles.Drawer}>
        <Drawer.Navigator >
          <Drawer.Screen style={styles.Screen} name="login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
        <Header/>
        <Main/>
    </View>
    */