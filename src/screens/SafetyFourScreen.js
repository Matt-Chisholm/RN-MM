import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Context as SafetyContext } from "../context/SafetyContext";
import QuestionForm from "../components/QuestionForm";

export default function SafetyFourScreen({ navigation }) {
  const { state, addSupport } = useContext(SafetyContext);
  console.log(state);
  return (
    <LinearGradient colors={["#87dcff", "#3ef9c5"]} style={styles.gradient}>
      <View style={styles.container}>
        <QuestionForm
          header='4/5'
          subheader='My Supports'
          question='Who can I reach out to when I need help?'
          nextScreen={() => navigation.navigate("SafetyFive")}
          prevScreen={() => navigation.navigate("SafetyThree")}
          value={state.supports}
          onSubmit={(support) => addSupport(support)}
          buttonTitle="Next"
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
