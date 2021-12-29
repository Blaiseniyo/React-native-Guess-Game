import React,{useState} from "react"
import {View, Text,Button,StyleSheet,TouchableWithoutFeedback,Keyboard, Alert} from "react-native"
import Card from "../components/Card"
import color from "../constants/color"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"


const StartGameScreen = props =>{
    const [enteredValue,setEnteredValue] = useState("");
    const [confirmed,setConfirmed] = useState(false);
    const [enteredNumber, setEnteredNumber] = useState("");

    const inputTextHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,""));
    }
    const resetInputHandler=()=>{
        setEnteredValue("")
        setConfirmed(false);
    }

    const confirmNumberHandler = ()=>{
        const choosenNumber = parseInt(enteredValue)

        if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber >99){
            Alert.alert("Invalid Number!","Number has to be a number between 1 and 99.",[{text:"Okay",style:"cancel", onPress:resetInputHandler}])
            return;
        }

        setConfirmed(true);
        setEnteredNumber(choosenNumber);
        props.choice(choosenNumber)
        setEnteredValue("");
        Keyboard.dismiss()
    }

    let confiredText;

    if(confirmed){
        confiredText=<Card style={styles.selectedInfo}>
            <View style={styles.numberContainer}>
                <Text>You selected</Text>
                <NumberContainer>{enteredNumber}</NumberContainer>
                <Button title="START GAME" onPress={()=> props.start(true)}/>
            </View>
    </Card>
    }
    return (
        <TouchableWithoutFeedback 
        onPress={()=>{
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.inputTitle}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text>select a Number</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2}
                            onChangeText={inputTextHandler}
                            value={enteredValue}
                          />
                        <View style={styles.buttonContainer}>
                            <View style={styles.Btn}>
                                <Button title="reset" onPress={resetInputHandler} color={color.secondary} />
                            </View>
                            <View style={styles.Btn}>
                                <Button title="confirm" onPress={confirmNumberHandler} color={color.primary} />
                            </View>
                        </View>
                    </View>
                </Card>
                {confiredText}
                
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center"
        
    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        alignItems:"center"
    },
    buttonContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:7,
    },
    inputTitle:{
        fontSize:20,
        marginVertical:10
    },
    Btn:{
        flexDirection:"column",
        width:"45%"
    },
    input:{
        width:80
    },
    numberContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    selectedInfo:{
        marginVertical:10
    },
})

export default StartGameScreen