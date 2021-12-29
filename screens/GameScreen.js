import React,{useState,useRef} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card';
import  NumberContainer from "../components/NumberContainer"


const generateRandomBetween  = (min, max, exclude)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}


const GameScreen = props =>{
    const [currentGuess,setCurrentGuess]= useState(generateRandomBetween(1,100,props.userChoice))

    const lower= useRef(1);
    const higher= useRef(100);
    const [count,setCount] = useState(0)
    return (
        <View style={styles.container}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                {currentGuess === props.userChoice ?
                <View style={styles.gameDatails}>
                    <Text>The Game is Over</Text>
                    <Text>The Number was: {props.userChoice}</Text>
                    <Text>The Number of rounds was</Text>
                    <NumberContainer>{count}</NumberContainer>
                    <Button title="New Game" onPress={()=> props.start(false)}/>
                </View>
                :<View style={styles.btnContainer}>
                    <Button title="LOWER" onPress={()=>{
                    if(currentGuess < props.userChoice){
                        lower.current = currentGuess;
                        setCount(count+1);
                        const guess = generateRandomBetween(lower.current,higher.current,currentGuess)
                        setCurrentGuess(guess)
                    }else{
                        Alert.alert("Don't cheet!","The Guess is not lower than your choice",[{text:"Okay",style:"default"}])
                        return;
                    }
                }}/>
                <Button title="GREATER" onPress={()=>{
                    if(currentGuess > props.userChoice){
                        higher.current= currentGuess;
                        setCount(count+1);
                        const guess = generateRandomBetween(lower.current,higher.current,currentGuess)
                        setCurrentGuess(guess)
                    }else{
                        Alert.alert("Don't cheet!","The Guess is not greater than your choice",[{text:"Okay",style:"default"}])
                        return;
                    }
                   
                }}/>
                </View>
                }
                
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:"center",
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
        width:300,
        maxWidth:"100%"
    },
    gameDatails:{
        //flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10,
        width:"100%"
    }
})

export default GameScreen