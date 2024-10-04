import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
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

export default ShowScreen;
