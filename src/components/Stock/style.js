import {StyleSheet,Platform} from 'react-native'

const width = 60;
const fontSize = 13;
export default StyleSheet.create({


"StockContainer":{
    width:"100%",
    height: 40,
    flexDirection:"row",
    borderWidth: 0.2,
    margin:0,
    position:"relative",
    borderColor:"rgba(22, 22, 22, 1)",
    padding:0,
    justifyContent:"center",
    backgroundColor:"black"
},
"StockText":{
    color: "white",
    margin:"3%",
    fontSize:fontSize,
    width: width,
    
},
"StockTextG":{
    color: "green",
    margin:"3%",
    fontSize:fontSize,
    width: width,
},
"StockTextR":{
    color: "red",
    margin:"3%",
    fontSize:fontSize,
    width: width,
},
"cicleR":{
        borderRadius: 100,
        width:  5,
        height: 5,
        backgroundColor:'#f00',
        justifyContent: 'center',
        marginTop:19
},
"cicleG":{
    borderRadius: 100,
    width:  5,
    height: 5,
    backgroundColor:'green',
    marginTop:19
}
  
});
