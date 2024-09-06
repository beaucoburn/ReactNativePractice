import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.searchBarText}>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee'
});

export default SearchBar;
