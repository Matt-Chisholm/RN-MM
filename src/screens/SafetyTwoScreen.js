import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import QuestionForm from "../components/QuestionForm";

export default function SafetyTwoScreen() {
  const [warningSigns, setWarningSigns] = useState("");
  return (
    <LinearGradient colors={["#87dcff", "#f9f73e"]} style={styles.gradient}>
      <View style={styles.container}>
        <QuestionForm
          header='2/5'
          subheader='My Warning Signs'
          question='What are my warning signs that tell me Im starting to get overwhelmed?'
          nextScreen={() => navigation.navigate("SafetyThree")}
          prevScreen={() => navigation.navigate("SafetyOne")}
          value={warningSigns}
          onChangeText={setWarningSigns}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
