import React from "react";
import {View,StyleSheet,Text} from "react-native";

const StartGameScreen = (props)=>{

    return (
        <View style={style.screen}>
                <Text>The Game Screen</Text>
        </View>
    )

};

const style = StyleSheet.create({
    screen:{
            flex:1,
            padding:10,
            alignItems:'center',
            
    }
});

export default StartGameScreen;