import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  console.log(id);
  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
