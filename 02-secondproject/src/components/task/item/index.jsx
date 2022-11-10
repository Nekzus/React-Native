import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const ItemList = (props) => {
  const { data, onModal } = props;
  return (
    <TouchableOpacity onPress={onModal.bind(this, data.item.id)}>
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{data.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  listItemContainer: {
    paddingVertical: 20,
    backgroundColor: "#A855F7",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginVertical: 5,
  },
  listItem: {
    fontSize: 14,
    color: "white",
    paddingHorizontal: 10,
  },
});
