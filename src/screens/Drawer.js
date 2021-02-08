import styles from "./style.js"
import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from "../components/Main/Main.js";
import Login from "../components/Login/Login.js";
import DrawerContent from "./DrawerContent.js"


const Drawer = createDrawerNavigator();


export function MyDrawer() {
 
  return (
   
    <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}  
    drawerStyle={styles.DrawerNav} initialRouteName="Main" 
    drawerContentOptions={{
      initialRouteName:"Main",
      activeTintColor: 'black',
      itemStyle: styles.DrawerItems,
      minSwipeDistance:50
    }} >
    <Drawer.Screen  name="Login" component={Login} />
    <Drawer.Screen  name="Main" component={Main} options={{drawerLabel:"Movers"}}/>
   
  </Drawer.Navigator>
  );
}