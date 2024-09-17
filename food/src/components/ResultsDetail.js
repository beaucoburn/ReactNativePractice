import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image
        source={{ uri: result.image_url }} 
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultsDetail;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  }
});
