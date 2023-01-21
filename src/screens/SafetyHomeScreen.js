import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function SafetyHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Safety Plans</Text>
      <Text style={styles.subHeader}>*Complete while calm</Text>
      <Text style={styles.desc}>
        A safety plan can help keep you safe, if you are feeling overwhelmed
        and/or having thoughts of ending your life. Try answering these
        questions and see if it helps. It's important to share this plan with
        family and friends close to you, so they can support you.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SafetyOne")}>
        <Text style={styles.text}>let's start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 25,
    marginBottom: 20,
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    padding: 22,
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "#0074d9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
