import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onChange={() => {}} />
      <Button title={`Decrease ${color}`} /> 
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
