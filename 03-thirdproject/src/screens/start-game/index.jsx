import {
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
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{ color: "white" }}>Tu selección</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
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
    fontFamily: "open-sans-bold",
    color: Colors.text,
  },
  inputContainer: {
    width: 300,
    maxWidth: "90%",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#4E4B5A",
  },
  textInput: {
    color: Colors.text,
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
    backgroundColor: Colors.backgroundSecondary,
    marginVertical: 20,
    alignItems: "center",
  },
});
