import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";

const SafetyModal = ({ isVisible, onClose, onSave, header }) => {
  const [name, setName] = useState("");

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      transparent={true}>
      <View style={styles.modal}>
        <Text style={styles.modalHeader}>{header}</Text>
        {header === "Safety Plan" ? (
          <>
            <View style={styles.nameView}>
              <Text style={styles.modalText}>Name</Text>
            </View>
            <TextInput
              style={styles.modalInput}
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </>
        ) : null}
        {header === "Quit now?" ? (
          <Text style={styles.subHeader}>
            If you leave now, you'll lose your progress
          </Text>
        ) : null}
        <View style={styles.modalButtonView}>
          <Pressable
            style={
              header === "Quit now?" ? styles.quitButton : styles.saveButton
            }
            onPress={() => {
              onSave(name);
              onClose();
            }}>
            <Text
              style={
                header === "Quit now?"
                  ? styles.quitButtonText
                  : styles.saveButtonText
              }>
              {header === "Quit now?" && "Quit"}
            </Text>
          </Pressable>
          <Pressable style={styles.cancelButton} onPress={() => onClose()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
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
    marginBottom: 200,
  },
  modalInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
  },
  nameView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    width: "80%",
    marginBottom: 5,
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
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginRight: 100,
  },
  modalButtonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderTopColor: "lightblue",
    borderTopWidth: 1,
    paddingTop: 20,
  },
  saveButton: {
    width: 100,
    height: 30,
    borderRightColor: "lightblue",
    borderRightWidth: 1,
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    paddingRight: 20,
  },
  cancelButton: {
    width: 100,
    height: 30,
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    textAlign: "center",
  },
  quitButton: {
    width: 100,
    height: 30,
    borderRightColor: "lightblue",
    borderRightWidth: 1,
  },
  quitButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    paddingRight: 20,
  },
});

export default SafetyModal;
