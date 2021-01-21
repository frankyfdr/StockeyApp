import {StyleSheet,Platform} from 'react-native'

export default StyleSheet.create({

  
   "View":{
    backgroundColor: '#181818',
     ...Platform.select({
      ios: {
        
      },
      android: {
        marginTop: "8%",
        
      }

     }),
    
     height:"100%"
   },
  "Drawer":{
    zIndex:2,
    position:"absolute"
  },
  "Screen":{
    backgroundColor:"black"
  }
    
});
