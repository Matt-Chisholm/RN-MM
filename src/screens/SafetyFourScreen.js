import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SafetyFourScreen() {
  return (
    <LinearGradient colors={["#87dcff", "#3ef9c5"]} style={styles.gradient}>
      <View style={container}>
        <Text>SafetyFourScreen</Text>
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
