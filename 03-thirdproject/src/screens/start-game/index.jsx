import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card, Input, NumberContainer } from "../../components";
import React, { useState } from "react";

import Colors from "../../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const handlerInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const handlerResetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handlerConfirmInput = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Numero Inválido", "El número debe estar entre 1 y 99", [
        { text: "Entendido", style: "destructive", onPress: handlerResetInput },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
    }
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{ fontsize: 25, color: "white" }}>Tu selección</Text>
        <NumberContainer number={selectedNumber} />
        <Button
          title="EMPEZAR JUEGO"
          onPress={() => props.onStartGame(selectedNumber)}
          color={Colors.primary}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.textInput}>Elija un número</Text>
          <Input
            style={styles.input}
            placeholder={"00"}
            placeholderTextColor={"gray"}
            value={enteredValue}
            onChangeText={handlerInputNumber}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            color={Colors.text}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Limpiar"
                onPress={handlerResetInput}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirmar"
                onPress={handlerConfirmInput}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "Lato-Bold",
    color: Colors.text,
  },
  inputContainer: {
    width: "70%",
    height: 180,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.backgroundSecondary,
  },
  textInput: {
    color: Colors.text,
  },
  input: {
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    width: "70%",
    height: 180,
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: Colors.backgroundSecondary,
    alignItems: "center",
    marginVertical: 20,
  },
});
