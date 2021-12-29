import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import color from '../constants/color'


const numberContainer = props =>{

    return(
        // <View>
            
        // </View>
        <View style={styles.numberBox}>
            {/* <Text style={styles.number}>{enteredNumber}</Text> */}
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberBox:{
        // color:color.primary,
         padding:10,
         marginVertical:10,
         borderColor:color.primary,
         borderWidth:2,
         borderRadius:10,
     },
     number:{
         color:color.primary,
         fontSize:22,
     }
})

export default numberContainer;