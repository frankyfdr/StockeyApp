import {StyleSheet,Platform} from 'react-native'

export default StyleSheet.create({

  "View":{
      height:"100%",
      flex:1,
      backgroundColor:"black"
    
  },
  "inputContainer":{
    flexDirection:"column",
    marginBottom:"4%",
    alignItems:"center",
  },
  "Form":{
  marginTop:"40%",
  height:"100%",
  padding:30
},
"Input":{
  backgroundColor:"white",
  borderBottomColor:"black",
  borderWidth:1,
  width:"100%",
  height:40,
  borderRadius:10,
  padding:10
},
"text":{
  color:"white",
  fontSize:20,
  textAlign:"center"
},
"button":{
  padding:5,
  width:"100%",
  borderColor:"#1488AC",
  borderWidth:1,
  borderRadius:10,
  marginBottom:20
}
    
});
