import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.constainer}>
      <Image style={styles.image} source={{ uri: result.image }} />
      <Text style={styles.name}>{result.businessname}</Text>
      <Text style={styles.review}>{result.reviews} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: { marginLeft: 15, marginBottom: 10 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  review: {
    color: "gray",
  },
});
export default ResultsDetail;
