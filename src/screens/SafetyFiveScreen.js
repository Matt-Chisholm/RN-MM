import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Context as SafetyContext } from "../context/SafetyContext";
import QuestionForm from "../components/QuestionForm";
import SafetyModal from "../components/SafetyModal";

export default function SafetyFiveScreen({ navigation }) {
  const { state, setCodewords, setPlanName } = useContext(SafetyContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

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
          onSubmit={(codeword) => setCodewords(codeword)}
          buttonTitle='save'
          quitScreen={() => navigation.navigate("SafetyOne")}
        />
        <SafetyModal
          isVisible={isModalVisible}
          onClose={toggleModal}
          onSave={(name) => {
            setPlanName(name);
            navigation.navigate("Results");
          }}
        />
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
