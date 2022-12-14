import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";

export default function QuestionForm({
  header,
  subheader,
  question,
  nextScreen,
  prevScreen,
  buttonTitle,
  onSubmit,
}) {
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Feather name='x' size={40} color='black' style={styles.icon} />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        style={styles.modalContainer}
        transparent={true}
        animationIn>
        <View style={styles.modal}>
          <Text style={styles.modalHeader}>Quit now?</Text>
          <Text>If you leave now, you'll lose your progress.</Text>
          <View style={styles.modalButtonView}>
            <Button
              title='Quit'
              onPress={console.log("press")}
              style={styles.modalButtons}
            />
            <Button title='Cancel' onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.subheader}>{subheader}</Text>
      <Text style={styles.question}>{question}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder='Type here'
      />
      <Button
        title={buttonTitle}
        onPress={() => {
          onSubmit(text);
          nextScreen();
        }}
      />
      {prevScreen && <Button title='Back' onPress={prevScreen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  modalButtons: {
    width: 100,
  },
  container: {
    marginTop: 60,
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  icon: {
    paddingLeft: 300,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    paddingRight: 100,
  },
  subheader: {
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 100,
    marginTop: 30,
  },
  question: {
    fontSize: 16,
    paddingRight: 100,
    marginTop: 20,
  },
});
