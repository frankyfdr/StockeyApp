import {StyleSheet,Platform} from 'react-native'

export default StyleSheet.create({

  
   "View":{
    backgroundColor: '#181818',
    flexDirection:"row",
    
    padding:1,
     ...Platform.select({
      ios: {
        
      },
      android: {
        
      }

     }),
    
     height:"10%",
     width:"100%",
   },
   "img":{
    height:"100%",
    width:"100%",
    resizeMode: 'contain',
   },
   "optMenu":{
       backgroundColor:"black",
       width:"24%",
       height:"55%",
       margin:1,
       borderRadius:3,
   }
  
    
});
