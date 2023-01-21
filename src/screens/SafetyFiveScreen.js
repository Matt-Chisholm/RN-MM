import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
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
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-200}>
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
        </KeyboardAvoidingView>
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
});
