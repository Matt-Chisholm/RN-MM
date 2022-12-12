import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SafetyFourScreen() {
  return (
    <View style={container}>
      <Text>SafetyFourScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
