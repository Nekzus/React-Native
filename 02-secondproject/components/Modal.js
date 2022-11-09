import { Button, Modal, StyleSheet, Text, View } from "react-native";

const ModalItem = (props) => {
  const { visible, onCancel, onDelete, item } = props;

  if (!visible) return null;

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalMessage}>
          <Text style={styles.modalTitle}>Task Details</Text>
          <Text style={styles.modalDetailText}>
            ¿Are you sure you want to delete?
          </Text>
        </View>
        <View style={styles.modalMessage}>
          <Text style={styles.modalItem}>{item.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            color="#EF4444"
            onPress={onDelete.bind(this, item.id)}
            title="DELETE"
          />
          <Button color="#25E35F" onPress={onCancel} title="CANCEL" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#4E4B5A",
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  modalMessage: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalDetailText: {
    fontSize: 14,
    color: "#fff",
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30,
    color: "#fff",
  },
});

export default ModalItem;
