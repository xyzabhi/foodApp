import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import food from "../api/food";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await food.get(`/restaurant/${id}`);
    setResult(response.data.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  const resname = result === null ? "" : result.businessname;
  if (!result) return <Text>Not Found</Text>;
  else
    return (
      <View>
        <Text>{resname}</Text>
        <Image source={{ uri: result.image }} style={styles.image} />
      </View>
    );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});
export default ResultShowScreen;
