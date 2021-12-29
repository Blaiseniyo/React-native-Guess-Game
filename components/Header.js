import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/color";

const Header = props =>{
    return(
        <View style={styles.Header}>
            <Text style={styles.HeaderTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header:{
        width:"100%",
        paddingTop:36,
        height:90,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:color.primary
    },
    HeaderTitle:{
        fontSize:18,
        color:"black",
        //fontFamily:"open-sans-bold"
    }
})

export default Header;