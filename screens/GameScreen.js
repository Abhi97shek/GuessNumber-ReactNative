import React,{useState,useRef,useEffect} from "react";
import {View,Text,StyleSheet,Button, Alert} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";


const generateRandomBetween = (min,max,exclude) =>{

        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max-min)) + min;

        if(randomNumber === exclude)
        {
            return generateRandomBetween(min,max,exclude)
        }
        else
        {
            return randomNumber;
        }

};

const GameScreen = (props)=>{

    const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
    const [rounds,setRounds] = useState(0);
    let currentLow = useRef(1);
    let currentHigh = useRef(100);


    useEffect(()=>{
        if(currentGuess === props.userChoice)
        {
            props.onGameOver(rounds);
        }
    },[currentGuess,rounds]);
    const nextGuessHandler = (direction)=>{
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice))
        {
            Alert.alert('Don\'t lie','You know this is wrong',[{text:'Sorry',style:'cancel'}]);
            return;
        }
        
        if(direction === 'lower')
        {
            currentHigh.current = currentGuess;
        }
        else
        {
            currentLow.current = currentGuess;
        }
       let nextNumber= generateRandomBetween(currentLow,currentHigh,currentGuess);
       setCurrentGuess(nextNumber);
       setRounds(rounds++);
    };
    
    return (
            <View style={styles.screen}>
                <Text>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                        <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}/>
                        <Button title="GREATER" onPress={nextGuessHandler.bind(this,'higher')}/>
                </Card>
            </View>
    )
}


const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'

    },
    buttonContainer:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:20,
            width:300,
            maxWidth:'80%'
    }
});


export default GameScreen;