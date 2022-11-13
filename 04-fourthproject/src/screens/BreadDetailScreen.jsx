import { StyleSheet, Text, View } from "react-native";

import React from "react";

const BreadDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Bread Detail Screen</Text>
    </View>
  );
};

export default BreadDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
