import React from "react";
import {View,Text,StyleSheet} from "react-native";


const Header = (props)=>{

    return (
        <View style={style.header}>
            <Text style={style.HeaderTitle}>{props.title}</Text>
        </View>
    )

};

const style = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center'
    },
    HeaderTitle:{
        color:'black',
        fontSize:18,
        
    }

});
export default Header;