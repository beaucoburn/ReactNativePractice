import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.childStyleOne}>Child #1</Text>
      <Text style={styles.childStyleTwo}>Child #2</Text>
      <Text style={styles.childStyleThree}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  childStyleOne: {
    borderWidth: 1,
    borderColor: 'red',
    height: 75,
    width: 100,
  },
  childStyleTwo: {
    borderWidth: 1,
    borderColor: 'green',
    height: 75,
    width: 100,
  },
  childStyleThree: {
    borderWidth: 3,
    borderColor: 'purple',
    height: 75,
    width: 100,
  },
});

export default BoxScreen;
