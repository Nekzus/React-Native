import { Dimensions, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";
import React from "react";

const { width, height } = Dimensions.get("window");
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: height * 0.15,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 22,
    fontFamily: "Lato-Bold",
  },
});
