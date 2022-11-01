import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Item de lista" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View style={styles.itemContainer}>
        <TextInput>Item 1</TextInput>
        <TextInput>Item 2</TextInput>
        <TextInput>Item 3</TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemContainer: {
    marginTop: 20,
    height: 500,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
});
