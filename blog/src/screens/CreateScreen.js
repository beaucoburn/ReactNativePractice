import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput value={title} onChangeText={(text) => setTitle(text)} placeholder="Title" />
      <Text>Enter Content:</Text>
      <TextInput value={content} onChangeText={(text) => setContent(text)} placeholder="Content" />
    </View>
  )
};

const styles = StyleSheet.create({});

export default CreateScreen;
