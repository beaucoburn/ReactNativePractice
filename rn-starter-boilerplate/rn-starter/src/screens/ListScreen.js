import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", key: "A" },
    { name: "Friend #2", key: "B" },
    { name: "Friend #3", key: "C" },
    { name: "Friend #4", key: "D" },
    { name: "Friend #5", key: "E" },
    { name: "Friend #6", key: "F" },
    { name: "Friend #7", key: "G" },
    { name: "Friend #8", key: "H" },
    { name: "Friend #9", key: "I" },
  ];
  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ListScreen;
