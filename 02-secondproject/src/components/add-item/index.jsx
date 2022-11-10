import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";

const AddItem = (props) => {
  const { onChange, onAddItem, value } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input task"
        onChangeText={onChange}
        value={value}
        style={styles.input}
        placeholderTextColor="darkgrey"
        cursorColor={"#A855F7"}
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

export default AddItem;

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
