import { Button, StyleSheet, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useState } from "react";

import Colors from "../../constants/colors";

const GameScreen = (props) => {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
    else return rndNum;
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userOption)
  );

  return (
    <View style={styles.screen}>
      <Text style={{ color: "white" }}>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button color={Colors.primary} title="MENOR" onPress={() => {}} />
        <Button color={Colors.accent} title="MAYOR" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: Colors.backgroundSecondary,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    width: 300,
    height: 60,
    maxWidth: "80%",
  },
});
