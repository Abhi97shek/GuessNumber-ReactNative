import React,{useState} from "react";
import {View,StyleSheet,Text,TextInput,Button,TouchableWithoutFeedback,Keyboard} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import color from "../constants/color";
const StartGameScreen = (props)=>{

        const [enterValue,setEnterValue] = useState('');
        const [confirmed,setConfirmed] = useState(false);
        const [selectedNumber,setSelectedNumber] = useState('');

        const numberInputHandler = (inputText)=>{
            setEnterValue(inputText.replace(/[^0-9]/g,''));
        };

        const resetInputHandler = ()=>{

            setEnterValue('');
            setConfirmed(false);
        };

        const confirmHandler = ()=>{

            const chooseValue = parseInt(enterValue);

            if(chooseValue === NaN || chooseValue <= 0 || chooseValue > 99)
            {
                return;
            }
            setConfirmed(true);
            setSelectedNumber(chooseValue);
            setEnterValue('');
            

        };

        let confirmedOutput;

        if(confirmed)
        {
                confirmedOutput = <Text>Choosen Number : {selectedNumber}</Text>
        }




    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={style.screen}>
                <Text style={style.title}>Start a New Game!</Text>
                <Card style={style.innerContainer}>
                    <Text>Select a Number</Text>
                    <Input style={style.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} value={enterValue} onChangeText={numberInputHandler}/>
                    <View style={style.buttons}>
                        <View style={style.button}><Button title="Reset" onPress={resetInputHandler} color={color.accent}/></View>
                        <View style={style.button}><Button title="Confirm" onPress={confirmHandler} color={color.primary}/></View>
                    </View>
                </Card>
                <Text>{confirmedOutput}</Text>
        </View>
        </TouchableWithoutFeedback>
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
    },
    button:{
        width:80
    },
    input:{
        width:50,
        textAlign:'center'
    }
});

export default StartGameScreen;