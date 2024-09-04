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
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
  },
  childStyleOne: {
    borderWidth: 1,
    borderColor: 'red',
  },
  childStyleTwo: {
    borderWidth: 1,
    borderColor: 'green',
  },
  childStyleThree: {
    borderWidth: 3,
    borderColor: 'purple',
  },
});

export default BoxScreen;
