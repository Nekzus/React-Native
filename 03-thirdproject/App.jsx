import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import GameScreen from "./screen/GameScreen";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";

const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      await fetchFonts();
      setDataLoaded(true);
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (dataLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [dataLoaded]);

  if (!dataLoaded) return null;
  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={handlerStartGame} />;
  if (userNumber) content = <GameScreen />;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header title={"Adivina el Número"} />
      {content}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
