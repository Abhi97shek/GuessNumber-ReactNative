import React,{useState} from "react";
import {View,StyleSheet,Text,TextInput,Button,TouchableWithoutFeedback,Keyboard,Alert,Image} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import color from "../constants/color";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
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

            if(isNaN(chooseValue) || chooseValue <= 0 || chooseValue > 99)
            {
                Alert.alert(
                    "Invalid Number",
                    "Number has to between 1 and 99",
                    [{text:"Okay",style:'destructive',onPress:resetInputHandler}]

                )
                return;
            }
            setConfirmed(true);
            setSelectedNumber(chooseValue);
            setEnterValue('');
            Keyboard.dismiss();
            

        };

        let confirmedOutput;

        if(!confirmed)
        {
                confirmedOutput = 
                <Card style={style.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <MainButton onPress={props.onGameStart(selectedNumber)}>START GAME</MainButton>
                </Card>
        }




    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={style.screen}>
            {/* <View style={style.imageContainer}>
                <Image source={require('../assets/success.png')} style={style.image} resizeMode="cover"/>
            </View> */}
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
    },
    summaryContainer:{
        marginTop:40,
        alignItems:"center",
        color:'red'
    },
    imageContainer:{
        width:'80%',
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30
    },
    image:{
        width:'100%',
        height:'100%'
    }
});

export default StartGameScreen;