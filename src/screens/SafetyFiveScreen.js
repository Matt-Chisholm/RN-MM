import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Context as SafetyContext } from "../context/SafetyContext";
import QuestionForm from "../components/QuestionForm";
import Modal from "react-native-modal";

export default function SafetyFiveScreen({ navigation }) {
  const { state, addCodeword, addPlanName } = useContext(SafetyContext);
  console.log(state);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <LinearGradient colors={["#87dcff", "#6043ad"]} style={styles.gradient}>
      <View style={styles.container}>
        <QuestionForm
          header='5/5'
          subheader='My Codeword'
          question='Choose a codeword for when you are in crisis.'
          nextScreen={() => toggleModal()}
          prevScreen={() => navigation.navigate("SafetyFour")}
          value={state.codeword}
          onSubmit={(codeword) => addCodeword(codeword)}
          buttonTitle='save'
          quitScreen={() => navigation.navigate("SafetyOne")}
        />
        <Modal
          isVisible={isModalVisible}
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
                  addPlanName(name);
                  toggleModal();
                  navigation.navigate("SafetyOne");
                }}
                style={styles.modalButton}
              />
              <Button
                color={"grey"}
                title='Cancel'
                onPress={() => toggleModal()}
              />
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
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
