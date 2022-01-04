import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);

  const configureHandler = ()=>{
    setGuessRounds(0);
    setUserNumber(null);

};
  const startGameHandler = (inputNumber)=>{

      setUserNumber(inputNumber);
     
    };

    const gameOverHandler = noOfRounds =>{
        setGuessRounds(noOfRounds);
    };

  

  let content = <StartGameScreen onGameStart={startGameHandler} onGameOver={gameOverHandler}/>;

  if(userNumber && guessRounds<=0)
  {
    content =  <GameScreen userChoice={userNumber}/>;
  }
  else if(guessRounds > 0)
  {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureHandler}/>
  }


  return (
    <View style={styles.screen}>
          <Header title="Guess a Number"/>
          {content}     
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
