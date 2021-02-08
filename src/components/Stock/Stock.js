import * as React from "react";
import styles from "./style.js"
import Home from "../Home/Home.js"
import { View, Text, Image,TouchableOpacity} from "react-native";

export default function App(props) {
    


    let info = props.symInfo.props.symInfo;
    

    if(props.symInfo.props.render === true)
    {
 
    let cor ="";
    let market;
    if(info.marketState === "REGULAR") {
        market= styles.cicleG
    }else
    market= styles.cicleR


   if(info.regularMarketChange<0)
   cor=styles.StockTextR
    else
    cor= styles.StockTextG

    
    return( 
        <TouchableOpacity onPress={()=>alert(info.shortName)}>
            
           <View  style={styles.StockContainer}>
           <View style={market}></View>
                <Text style={styles.StockText}>{info.symbol}</Text>
                <Text style={styles.StockText}>{info.regularMarketPrice}</Text>
                <Text style={cor}> {info.regularMarketChange.toFixed(2)}</Text>
                <Text style={cor}>({info.regularMarketChangePercent.toFixed(2)}%)</Text>
            </View> 
            
        </TouchableOpacity>
    )
}
else return null
}
