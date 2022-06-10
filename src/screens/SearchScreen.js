import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../../components/ResultsList";
import SearchBar from "../../components/SearchBar";
import food from "../api/food";
import useResults from "../hooks/useResults";

const SearcScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>{errorMessage}</Text>
      <ScrollView>
        <ResultsList title="Cost Effective" results={results.slice(0, 20)} />
        <ResultsList title="Bit Pricier" results={results.slice(21, 40)} />
        <ResultsList title="Big Spender" results={results.slice(41)} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearcScreen;
