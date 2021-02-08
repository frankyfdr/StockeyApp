import axios from "axios";
import * as React from "react";
import { View, Text ,TouchableOpacity,TouchableHighlight,TextInput, Image} from "react-native";
import { SvgUri } from 'react-native-svg';
import  Lupa from "../../img/lupa.js"
import styles from "./style.js"
import { useContext } from "react";

import {Context,Nav} from "../../Context.js"

export default function App(props) {
  const ctx = useContext(Context)
 

  const [username,setUsername] = React.useState()
  const [pass,setPass] = React.useState()
  const Login =()=>{
    axios.post("https://api.stockey.tk/api/login",{
      "username":username,
      "password":pass
    }).then((resp)=>{
      if(resp.data != 3)
      {
        ctx.setSymList(resp.data.sym)
        props.navigation.goBack()
      }
      
    })
  }
 
  return (
    <View style={styles.View}>
       <View style={styles.Form}>
         <View style={styles.inputContainer}>
           <Text style={styles.text}>Username:</Text>
           <TextInput 
            name="username"
           onChangeText={(value) => setUsername(value)}
           autoCompleteType="username"
           autoCapitalize = 'none'
           clearButtonMode="while-editing"
           textContentType="username"
           style={styles.Input} />
          </View>

          <View style={styles.inputContainer}>
           <Text style={styles.text}>Password:</Text>
           <TextInput  
            clearButtonMode="while-editing"
           autoCompleteType="password"
           secureTextEntry={true}
           textContentType="password"
           onChangeText={(value) => setPass(value)}
           style={styles.Input} />
           
          </View>
          <TouchableOpacity style={styles.button} onPress={Login}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text  style={styles.text}>Create Account</Text>
          </TouchableOpacity>
       </View>
    </View>
  );
}
