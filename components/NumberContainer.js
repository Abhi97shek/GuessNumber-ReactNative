import React from "react";

import {View,Text,StyleSheet} from "react-native";

import color from "../constants/color";

const NumberContainer =(props)=>{

    return (
        <View style={styles.container}>
                <Text style={styles.number}>{props.children}</Text>
        </View>
    )

};

export default NumberContainer;


const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:color.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',

    },
    number:{
        color:color.accent,
        fontSize:22
    }

});
