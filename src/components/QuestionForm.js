import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import Modal from "react-native-modal";

export default function QuestionForm({
  header,
  subheader,
  question,
  nextScreen,
  prevScreen,
  buttonTitle,
  onSubmit,
  quitScreen,
}) {
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const progress = () => {
    if (header === "Let's start") {
      return 0.2;
    } else if (header === "2/5") {
      return 0.4;
    } else if (header === "3/5") {
      return 0.6;
    } else if (header === "4/5") {
      return 0.8;
    } else {
      return 1;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Feather name='x' size={40} color='black' style={styles.icon} />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        style={styles.modalContainer}
        transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.modalHeader}>Quit now?</Text>
          <Text>If you leave now, you'll lose your progress.</Text>
          <View style={styles.modalButtonView}>
            <Button
              title='Quit'
              color={"red"}
              onPress={quitScreen}
              style={styles.modalButtons}
            />
            <Button title='Cancel' onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <Text style={styles.header}>{header}</Text>
      <ProgressBar
        progress={progress()}
        color='#0074d9'
        style={styles.progressbar}
      />
      <Text style={styles.subheader}>{subheader}</Text>
      <Text style={styles.question}>{question}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder='Type here'
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          onSubmit(text);
          nextScreen();
        }}>
        <Text style={styles.text}>
          {buttonTitle}
          <Feather name='arrow-right' size={24} color='white' />
        </Text>
      </Pressable>
      {prevScreen && (
        <Pressable style={styles.button} onPress={prevScreen}>
          <Text style={styles.text}>
            back
            <Feather name='arrow-left' size={24} color='white' />
          </Text>
        </Pressable>
      )}
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
  progressbar: {
    width: 300,
    height: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(0,0,0,1)",
  },
  container: {
    flex: 1,
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
  button: {
    width: 250,
    height: 40,
    backgroundColor: "#0074d9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
