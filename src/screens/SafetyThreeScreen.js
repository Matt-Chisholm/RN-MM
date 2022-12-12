import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SafetyThreeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#87dcff", "#f9a53e"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text>SafetyThreeScreen</Text>
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
