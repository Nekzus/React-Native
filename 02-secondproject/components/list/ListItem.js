import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

const styles = StyleSheet.create({
  listItemContainer: {
    paddingVertical: 20,
    backgroundColor: "#9a848f",
    borderRadius: 5,
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
    color: "#ffffff",
    paddingHorizontal: 10,
  },
});

export default ItemList;
