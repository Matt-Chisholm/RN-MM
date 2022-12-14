import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Context as SafetyContext } from "../context/SafetyContext";
import QuestionForm from "../components/QuestionForm";

export default function SafetyThreeScreen({ navigation }) {
  const { state, addStrategy } = useContext(SafetyContext);
  console.log(state);

  return (
    <LinearGradient colors={["#87dcff", "#f9a53e"]} style={styles.gradient}>
      <View style={styles.container}>
        <QuestionForm
          header='3/5'
          subheader='My Coping and Distraction Strategies'
          question='When I feel overwhelmed, what are some things I can do to help me feel better?'
          nextScreen={() => navigation.navigate("SafetyFour")}
          prevScreen={() => navigation.navigate("SafetyTwo")}
          value={state.strategies}
          onSubmit={(strategy) => addStrategy(strategy)}
          buttonTitle='Next'
          quitScreen={() => navigation.navigate("SafetyOne")}
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
