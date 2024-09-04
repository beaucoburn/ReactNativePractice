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
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
  },
  childStyleOne: {
    borderWidth: 3,
    borderColor: 'blue',
  },
  childStyleTwo: {
    borderWidth: 3,
    borderColor: 'blue',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  childStyleThree: {
    borderWidth: 3,
    borderColor: 'blue',
  },
});

export default BoxScreen;
