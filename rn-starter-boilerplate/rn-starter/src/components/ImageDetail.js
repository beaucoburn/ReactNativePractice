import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {

  return (
    <View>
      <Image source={props.imageSource} />
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.score}>Image Score: {props.imageScore}</Text>
    </View>
  )
}

export default ImageDetail;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  score: {
    color: 'red',
    fontSize: 15,
  }
});
