import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text_style}>DC</Text>
        <Text style={styles.text_style}>Dear Comrade</Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF6FE",
    maxHeight: 200,
    padding: 20,
    borderRadius: 12,
  },
  text_style: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#154c79",
  },
});

export default Home;
