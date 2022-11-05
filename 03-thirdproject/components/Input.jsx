import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, onText, ...props }) => {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="numeric"
      maxLength={2}
      value={value}
      onChangeText={onText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
