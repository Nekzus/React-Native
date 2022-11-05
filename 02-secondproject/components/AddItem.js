import { Button, StyleSheet, TextInput, View } from "react-native";

const AddItem = (props) => {
  const { onChange, onAddItem, value } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input todo"
        onChangeText={onChange}
        value={value}
        style={styles.input}
      />
      <Button title="Add" color="black" onPress={onAddItem} />
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
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#9a848f",
  },
});

export default AddItem;
