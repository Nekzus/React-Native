import { Button, StyleSheet, Text, View } from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useState } from "react";

import Colors from "../../constants/colors";

const GameScreen = ({ userOption }) => {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
    else return rndNum;
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOption)
  );

  return (
    <View style={styles.screen}>
      <Card style={styles.container}>
        <Text style={{ color: "white" }}>La suposición del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button color={Colors.primary} title="MENOR" onPress={() => {}} />
          <Button color={Colors.accent} title="MAYOR" onPress={() => {}} />
        </View>
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
  container: {
    width: "70%",
    height: 180,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 50,
    backgroundColor: Colors.backgroundSecondary,
  },
  buttonContainer: {
    backgroundColor: Colors.backgroundSecondary,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
    height: 60,
    maxWidth: "80%",
  },
});
