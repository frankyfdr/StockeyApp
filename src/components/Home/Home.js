import React, { useState, useEffect } from 'react';
import styles from "./style.js"
import stylesstk from "../Stock/style.js"
import axios from "axios"
import Stock from "../Stock/Stock.js"
import { Thread } from 'react-native-threads';
import { View,SafeAreaView, FlatList,Text,ScrollView, Image,TouchableOpacity} from "react-native";

export default function App() {
    
    const [topLose, setTopLose] = useState("");
    const [topWin, setTopWin] = useState("");


    useEffect(()=>{
      //setInterval(()=>ola(),2000)
      ola()
    },[])

    const  OrderByAsc = (winner, loser) => {
      let sup;

      let idx = 0;
      let xidx =1;
      for(; idx < winner.length; idx++)
        {
          for(; xidx < winner.length;xidx++) 
        {
          if(winner[idx].props.render ===true )
          {  
            if(winner[xidx].props.render === true )
              { 
              if(winner[xidx].props.symInfo.regularMarketChangePercent < winner[idx].props.symInfo.regularMarketChangePercent )
                {
                  sup = winner[xidx];
                  winner[xidx] = winner[idx]
                  winner[idx] = sup
                }
            }
          }
        }
        xidx=0;
        }
/*---------------------------------loser----------------------------------------- */
       idx = 0;
       xidx =1;
      for(; idx < loser.length; idx++)
        {
          for(; xidx < loser.length;xidx++) 
        {
          if(loser[idx].props.render ===true )
          {  
            if(loser[xidx].props.render === true )
              { 
              if(loser[xidx].props.symInfo.regularMarketChangePercent > loser[idx].props.symInfo.regularMarketChangePercent )
                {
                  sup = loser[xidx];
                  loser[xidx] = loser[idx]
                  loser[idx] = sup
                }
            }
          }
        }
        xidx=0;
        }
      
         
      
      setTopLose(loser)
      setTopWin(winner)
    }
   const ola = async  () =>{


     await axios.get("https://api.stockey.tk/info/axp,amzn,aapl,ma,byg.l,nflx,ads.de,nke,LLOY.l,^FTSE")
       .then((response) =>{
         
           response = response.data.quoteResponse.result

          
           let lose = response.map((item,index) =>{
           if(item.regularMarketChange < 0)
            return(<Stock key={index}render={true} symInfo={item}/>)
           else
           return(<Stock key={index} render={false} symInfo={item}/>)
           })
          

           let win = response.map((item,index) =>{
            if(item.regularMarketChange < 0)
             return(<Stock key={index}render={false} symInfo={item}/>)
            else
            return(<Stock key={index} render={true} symInfo={item}/>)
            })
            OrderByAsc(win,lose)
            
            
        })
        
      
       
   }

   const renderItem = ({item,index}) =>(<Stock key={index} symInfo={item}/>)
    return( 
    <View style={styles.mainHome}>
      <View style={styles.topwinner}>
        <Text style={styles.h1win}>TOP WINNERS</Text>

        <View  style={stylesstk.StockContainer}>
                <Text style={styles.title}>Symbol</Text>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.title}>Change</Text>
                <Text style={styles.title}>Percent</Text>
            </View> 
          <FlatList
          data={topWin}
          keyExtractor={item => item.symbol}
          renderItem={renderItem}
          />
      </View>
      <View style={styles.toplooser}>
          <Text style={styles.h1lose}>TOP LOSERS</Text>
          <View  style={stylesstk.StockContainer}>
                <Text style={styles.title}>Symbol</Text>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.title}>Change</Text>
                <Text style={styles.title}>Percent</Text>
            </View> 
            <FlatList
            
          data={topLose}
          keyExtractor={item => item.symbol}
          renderItem={renderItem}
          />
      </View>
    </View>
        
    )
}
