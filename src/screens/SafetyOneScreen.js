import { View, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import QuestionForm from "../components/QuestionForm";

export default function SafetyOneScreen({ navigation }) {
  const [triggers, setTriggers] = useState("");
  console.log(triggers);
  return (
    <LinearGradient colors={["#87dcff", "#6043ad"]} style={styles.gradient}>
      <View style={styles.container}>
        <QuestionForm
          header="Let's start"
          subheader='My Triggers'
          question='What are my top triggers or stresses?'
          nextScreen={() => navigation.navigate("SafetyTwo")}
          value={triggers}
          onChangeText={setTriggers}
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
