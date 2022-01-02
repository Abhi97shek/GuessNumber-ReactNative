import React from "react";
import {View,StyleSheet,Text,TextInput,Button} from "react-native";
import Card from "../components/Card";

const StartGameScreen = (props)=>{

    return (
        <View style={style.screen}>
                <Text style={style.title}>Start a New Game!</Text>
                <Card style={style.innerContainer}>
                    <Text>Select a Number</Text>
                    <TextInput placeholder="Enter a Number"/>
                    <View style={style.buttons}>
                        <Button title="Reset" onPress={()=>{}}/>
                        <Button title="Confirm" onPress={()=>{}}/>
                    </View>
                </Card>
        </View>
    )

};

const style = StyleSheet.create({
    screen:{
            flex:1,
            padding:10,
            alignItems:'center',    
    },
    buttons:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    innerContainer:{
            width:300,
            maxWidth:'80%',
            alignItems:'center'
    }
});

export default StartGameScreen;