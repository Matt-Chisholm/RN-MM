import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Modal from "react-native-modal";

const SafetyModal = ({ isVisible, onClose, onSave }) => {
  const [name, setName] = useState("");

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      transparent={true}>
      <View style={styles.modal}>
        <Text style={styles.modalHeader}>Safety Plan</Text>
        <Text style={styles.modalText}>Name</Text>
        <TextInput
          style={styles.modalInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <View style={styles.modalButtonView}>
          <Button
            color={"green"}
            title='Save'
            onPress={() => {
              onSave(name);
              onClose();
            }}
            style={styles.modalButton}
          />
          <Button color={"grey"} title='Cancel' onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "80%",
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 100,
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButtonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  modalButtons: {
    width: 100,
  },
});

export default SafetyModal;
