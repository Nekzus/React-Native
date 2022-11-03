import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f4f5",
  },
  inputContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#9a848f",
  },
  listContainer: {
    marginHorizontal: 20,
  },
  listTitle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#212121",
  },
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
