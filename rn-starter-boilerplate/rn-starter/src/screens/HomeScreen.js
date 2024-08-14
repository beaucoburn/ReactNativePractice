import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const name = "Beau";

  return (
    <View>
      <Text style={styles.text}>Getting Started with React Native!</Text>
      <Text style={styles.subText}>My name is {name}</Text>
      <Button title="Go to Component Screen" onPress={() => props.navigation.navigate("Components")} />
      <TouchableOpacity onPress={() => props.navigation.navigate("List") }>
        <Text style={styles.subText}>
          Go to the List Screen
        </Text>
      </TouchableOpacity>
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
