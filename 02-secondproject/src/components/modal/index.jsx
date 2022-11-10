import { Button, Modal, StyleSheet, Text, View } from "react-native";

import React from "react";

const ModalItem = (props) => {
  const { visible, onCancel, onDelete, item } = props;

  if (!visible) return null;

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalStyle}>
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
      </View>
    </Modal>
  );
};

export default ModalItem;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#4E4B5A",
    padding: 10,
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
