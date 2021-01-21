import {StyleSheet,Platform} from 'react-native'


export default StyleSheet.create({

    "View":{
        width: "100%",
        height: "10%",
        position: "relative",
        backgroundColor:"black",
        flexDirection:"row",
        paddingLeft: 20,   
        elevation:5,

        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 1
        }

        
        
      },
      "viewText":{
        
        alignItems: "center",
        justifyContent:"center",
        width:"100%",
        flexDirection:"row"

      },
      "Image":{
      width: "100%",
      height: "60%",
      resizeMode: 'contain'   ,
      alignItems: "center",
      justifyContent:"center",
      marginTop:10,

      ...Platform.select({
        ios: {
          marginTop:"4%",
          height: "60%",
        },
        android: {
          
        }
  
       }),
      
          
      },
      "Header":{
      width:"auto",
      height:"100%",
      paddingLeft:10,
      paddingRight:10,
      flexDirection:"row",
      paddingTop:"3%",
      flex:1,
     
      },
      "HamMenuRow":{
        backgroundColor:"white",
        height:4,
        marginBottom:5,
        width:30,
        zIndex: 2,
      
      },
      "HamMenu":{
        marginTop:"3%",
        marginBottom:5,
        justifyContent:"center",
        alignItems: "center",
        ...Platform.select({
          ios: {
           marginTop:"8%"
          },
    
         }),
      },    
});
