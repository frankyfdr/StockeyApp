import * as React from "react";
import { View, Text ,TouchableOpacity, Image} from "react-native";
import { SvgUri } from 'react-native-svg';
import  Lupa from "../../img/lupa.js"
import styles from "./style.js"
export default function App() {
 
  return (
    <View style={styles.View}>
        <TouchableOpacity style={styles.optMenu}></TouchableOpacity>
        <TouchableOpacity style={styles.optMenu}></TouchableOpacity>
        <TouchableOpacity style={styles.optMenu}>
           <Lupa />
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.optMenu}></TouchableOpacity>
    </View>
  );
}
