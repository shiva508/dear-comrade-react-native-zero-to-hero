import { StyleSheet, Text, View } from "react-native";
import NewsConter from "./NewsConter";

const NewsInfo = ({ news }) => {
  return (
    <View style={styles.mainContainer}>
      <Text>{news.heading}</Text>
      <Text>{news.info}</Text>
      {news.counters.map((counter) => (
        <NewsConter key={counter.id} counter={counter}></NewsConter>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "red" },
});
export default NewsInfo;
