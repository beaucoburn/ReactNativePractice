import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const name = "Beau";

  return (
    <View>
      <Text style={styles.text}>Getting Started with React Native!</Text>
      <Text style={styles.subText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  subText: {
    fontSize: 20,
  },
});

export default HomeScreen;
