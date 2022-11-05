import { StyleSheet, Text, View } from "react-native";

import { Header } from "./components/Header";
import StartGameScreen from "./pages/StartGameScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"Adivina el Número"} />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
