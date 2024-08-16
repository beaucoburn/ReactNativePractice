import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {

  return (
    <View>
      <Image source={props.imageSource} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

export default ImageDetail;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});
