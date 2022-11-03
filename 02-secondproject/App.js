import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Input text" style={styles.input} />
        <Button title="Add" color="#9a848f" onPress={() => null} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f4f5",
  },
  inputContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: "#9a848f",
  },
});
