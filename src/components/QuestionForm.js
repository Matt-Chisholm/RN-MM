import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function QuestionForm({
  header,
  subheader,
  question,
  nextScreen,
  prevScreen,
  buttonTitle,
  value,
  onSubmit,
}) {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <View style={styles.container}>
      <View>
        <Feather name='x' size={40} color='black' style={styles.icon} />
      </View>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.subheader}>{subheader}</Text>
      <Text style={styles.question}>{question}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder='Type here'
      />
      <Button
        title={buttonTitle}
        onPress={() => {
          onSubmit(text);
          nextScreen();
        }}
      />
      {prevScreen && <Button title='Back' onPress={prevScreen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  icon: {
    paddingLeft: 300,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    paddingRight: 100,
  },
  subheader: {
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 100,
    marginTop: 30,
  },
  question: {
    fontSize: 16,
    paddingRight: 100,
    marginTop: 20,
  },
});
