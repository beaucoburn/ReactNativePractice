import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.childStyleOne} />
      <View style={styles.childStyleTwo} />
      <View style={styles.childStyleThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
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
    backgroundColor: 'red',
  },
  childStyleTwo: {
    borderWidth: 1,
    borderColor: 'green',
    height: 75,
    width: 100,
    marginTop: 75,
    backgroundColor: 'green',
  },
  childStyleThree: {
    borderWidth: 3,
    borderColor: 'purple',
    height: 75,
    width: 100,
    backgroundColor: 'purple',
  },
});

export default BoxScreen;
