import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const name = "Beau";

  return (
    <View>
      <Text style={styles.text}>Getting Started with React Native!</Text>
      <Text style={styles.subText}>My name is {name}</Text>
      <Button
        title="Go to Component Screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />
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
