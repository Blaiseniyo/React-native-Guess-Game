import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userChoice,setUserChoice]= useState('');
  const [gameOn,setGameOn]= useState(false);
  const displayScreen = ()=>{
    if(gameOn){
      return <GameScreen userChoice={userChoice} start={setGameOn}/>
    }
    return <StartGameScreen start={setGameOn} choice={setUserChoice}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number"/>
      {displayScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
});
