import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalItem = (props) => {
  const { visible, onCancel, onDelete, item } = props;

  if (!visible) return null;

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Details</Text>
      </View>
      <View style={styles.modalMessage}>
        <Text style={styles.modalDetailText}>
          ¿Are you sure you want to delete?
        </Text>
      </View>
      <View style={styles.modalMessage}>
        <Text style={styles.modalItem}>{item.value}</Text>
      </View>
      <View style={styles.modalButton}>
        <Button
          color="red"
          onPress={onDelete.bind(this, item.id)}
          title="DELETE"
        />
        <Button color="black" onPress={onCancel} title="CANCEL" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginVertical: 20,
    alignItems: "center",
    color: "white",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalDetailText: {
    fontSize: 14,
    color: "#212121",
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30,
  },
});

export default ModalItem;
