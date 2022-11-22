import {
  Alert,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, NumberContainer } from "../../components";
import React, { useRef, useState } from "react";

import Colors from "../../constants/colors";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const { width, height } = Dimensions.get("window");
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

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("Don't lie", "You know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.container}>
        <Text style={{ color: "white" }}>La suposición del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            color={Colors.primary}
            title="MENOR"
            onPress={() => {
              onHandleNextGuess("lower");
            }}
          />
          <Button
            color={Colors.accent}
            title="MAYOR"
            onPress={() => {
              onHandleNextGuess("greater");
            }}
          />
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
    width: "80%",
    height: height * 0.23,
    minHeight: 150,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: height * 0.02,
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
