import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, imageScore}) => {

  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Image Score: <Text style={styles.score}>{imageScore}</Text></Text>
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
    fontSize: 25,
  }
});
