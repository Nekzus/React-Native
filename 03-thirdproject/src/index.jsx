import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GameScreen, StartGameScreen } from "./screens";
import React, { useState } from "react";

import Colors from "./constants/colors";
import { Header } from "./components";
import { useFonts } from "expo-font";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const [loaded] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Italic": require("../assets/fonts/Lato-Italic.ttf"),
  });

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handlerStartGame} />;
  if (userNumber) content = <GameScreen />;

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={userNumber ? "A Jugar !" : "Adivina el Número"} />
      {content}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundPrimary,
  },
});
