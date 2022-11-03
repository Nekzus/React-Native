import { Button, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Input todo" style={styles.input} />
        <Button title="Add" color="#9a848f" onPress={() => null} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo 1</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo 2</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo 3</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo 4</Text>
        </View>
      </View>
    </View>
  );
}
