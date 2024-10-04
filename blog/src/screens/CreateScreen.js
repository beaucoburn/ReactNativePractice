import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput placeholder="Title" />
      <Text>Enter Content:</Text>
      <TextInput placeholder="Content" />
    </View>
  )
};

const styles = StyleSheet.create({});

export default CreateScreen;
