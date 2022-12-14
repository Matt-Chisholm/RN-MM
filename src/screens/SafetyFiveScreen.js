import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Context as SafetyContext } from "../context/SafetyContext";
import QuestionForm from "../components/QuestionForm";

export default function SafetyFiveScreen({ navigation }) {
  const { state, addCodeword } = useContext(SafetyContext);
  console.log(state);
  return (
    <LinearGradient colors={["#87dcff", "#6043ad"]} style={styles.gradient}>
      <View style={styles.container}>
        <QuestionForm
          header='5/5'
          subheader='My Codeword'
          question='Choose a codeword for when you are in crisis.'
          nextScreen={() => navigation.navigate("Results")}
          prevScreen={() => navigation.navigate("SafetyFour")}
          value={state.codeword}
          onSubmit={(codeword) => addCodeword(codeword)}
          buttonTitle='Save'
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
