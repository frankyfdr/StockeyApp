
import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from "../components/Main/Main.js";
import Login from "../components/Login/Login.js";
const Drawer = createDrawerNavigator();
export function MyDrawer() {
  return (
    <Drawer.Navigator  drawerContentOptions={{
      initialRouteName:"Main",
      activeTintColor: 'black',
      itemStyle: { marginVertical: 5 },
    }} >
    <Drawer.Screen  name="login" component={Login} />
    <Drawer.Screen  name="Main" component={Main} />
   
  </Drawer.Navigator>
  );
}