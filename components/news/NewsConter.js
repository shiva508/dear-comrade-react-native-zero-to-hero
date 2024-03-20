import { StyleSheet, Text, View } from "react-native";

const NewsConter = ({ counter }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerCommon}>
        <Text style={styles.textHeader}>
          {counter.counterParty} : {counter.counterPerson}
        </Text>
      </View>
      <Text style={styles.textCommon}>{counter.counterDetail}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#030637",
    marginBottom: 20,
    alignContent: "flex-start",
    justifyContent: "flex-start",
    padding: 4,
    borderRadius: 8,
  },
  headerCommon: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#1A5D1A",
    borderRadius: 4,
    textAlign: "center",
  },
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  textCommon: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 4,
    textAlign: "center",
  },
});
export default NewsConter;
