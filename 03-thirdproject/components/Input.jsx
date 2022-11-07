import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, onText, ...props }) => {
  return <TextInput style={{ ...styles.input, ...props.style }} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
