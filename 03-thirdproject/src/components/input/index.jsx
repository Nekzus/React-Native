import { StyleSheet, TextInput } from "react-native";

import Colors from "../../constants/colors";
import React from "react";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Colors.text,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
