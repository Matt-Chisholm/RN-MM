import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SafetyFiveScreen() {
  return (
    <View style={styles.container}>
      <Text>SafetyFiveScreen</Text>
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
