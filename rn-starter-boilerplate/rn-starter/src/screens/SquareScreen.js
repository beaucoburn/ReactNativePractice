import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter />
      <ColorCounter />
      <ColorCounter />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
