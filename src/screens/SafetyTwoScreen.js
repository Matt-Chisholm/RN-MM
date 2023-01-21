import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import QuestionForm from "../components/QuestionForm";
import { Context as SafetyContext } from "../context/SafetyContext";

export default function SafetyTwoScreen({ navigation }) {
  const { state, setWarnings } = useContext(SafetyContext);
  console.log(state);
  return (
    <LinearGradient colors={["#87dcff", "#f9f73e"]} style={styles.gradient}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-140}>
          <QuestionForm
            header='2/5'
            subheader='My Warning Signs'
            question='What are my warning signs that tell me Im starting to get overwhelmed?'
            nextScreen={() => navigation.navigate("SafetyThree")}
            prevScreen={() => navigation.navigate("SafetyOne")}
            value={state.warningSigns}
            onSubmit={(warningSign) => setWarnings(warningSign)}
            buttonTitle='next'
            quitScreen={() => navigation.navigate("SafetyOne")}
          />
        </KeyboardAvoidingView>
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
