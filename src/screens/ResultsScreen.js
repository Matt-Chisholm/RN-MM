import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as SafetyContext } from "../context/SafetyContext";

export default function ResultsScreen() {
  const { state } = useContext(SafetyContext);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{state.planName}</Text>
      <Text style={styles.header}>My triggers</Text>
      <Text>{state.triggers}</Text>
      <Text style={styles.header}>My warning signs</Text>
      <Text>{state.warnings}</Text>
      <Text style={styles.header}>My coping and distraction strategies</Text>
      <Text>{state.strategies}</Text>
      <Text style={styles.header}>My supports</Text>
      <Text>{state.supports}</Text>
      <Text style={styles.header}>My codeword</Text>
      <Text>{state.codewords}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
