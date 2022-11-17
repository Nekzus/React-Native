import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";
import React from "react";

const NumberContainer = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: Colors.backgroundPrimary,
    borderColor: Colors.accent,
    borderWidth: 2,
    borderRadius: 5,
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
    fontFamily: "Lato-Bold",
  },
});
