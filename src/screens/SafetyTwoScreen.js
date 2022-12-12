import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SafetyTwoScreen() {
  return (
    <LinearGradient colors={["#87dcff", "#f9f73e"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text>SafetyTwoScreen</Text>
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
