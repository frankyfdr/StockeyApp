import {StyleSheet,Platform} from 'react-native'


export default StyleSheet.create({

    "Image":{
        width: "100%",
        resizeMode: 'contain'   ,
        ...Platform.select({
          ios: {
     
          },
          android: {
            
          }
    
         }),
        },
        "HeaderTop":{
            marginTop:"-11%",
            backgroundColor:"pink"
         },
         "Main":{
            flex:1,
            height:"100%",
        },
        "DrawerItem":{
            color:"white",
            backgroundColor:"white"
        },
        "bottomDrawerSection":{
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
        },
        "TopDrawerSection":{
            marginTop: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1,
        }
});
