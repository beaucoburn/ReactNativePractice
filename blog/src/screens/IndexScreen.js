import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
