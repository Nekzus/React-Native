import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
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
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
