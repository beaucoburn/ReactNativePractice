import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title}) => {
  return (
    <View style={styles.searchBar}>
      <Text style={styles.searchBarText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default ResultsList;
