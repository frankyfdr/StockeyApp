import * as React from "react";
import styles from "./style.js"
import { View, Text, Image,TouchableOpacity} from "react-native";

export default function App({ navigation }) {
  
   const click = () =>{
    alert()
   }
    
    return( 
    
    <View style={styles.View}>
        <TouchableOpacity  style={styles.HamMenu} onPress={() => navigation.openDrawer()}>
            <View style={styles.HamMenuRow}></View>
            <View style={styles.HamMenuRow}></View>
            <View style={styles.HamMenuRow}></View>
        </TouchableOpacity>
        <View style={styles.Header}>
            <Image style={styles.Image} source={require('../../img/logo5.jpeg')} />
           
        </View>
    </View>
        
    )
}
