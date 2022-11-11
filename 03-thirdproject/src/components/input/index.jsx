import { StyleSheet, TextInput } from "react-native";

import React from "react";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
