import { Button, StyleSheet, TextInput, View } from "react-native";

const AddItem = (props) => {
  const { onChange, onAddItem, value } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input task"
        onChangeText={onChange}
        value={value}
        style={styles.input}
        placeholderTextColor="white"
      />
      <Button
        disabled={!value}
        title="Add"
        color="#22C55E"
        onPress={onAddItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  input: {
    color: "#fff",
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#9a848f",
  },
});

export default AddItem;
