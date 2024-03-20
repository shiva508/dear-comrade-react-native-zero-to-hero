import { StyleSheet, Text, View } from "react-native";
import NewsConter from "./NewsConter";
import { useEffect, useState } from "react";
import { NEWS_DATA } from "../data/data";

const NewsInfo = ({ route }) => {
  const newsId = route.params.id;
  const [newsInfo, setNewsInfo] = useState(null);
  useEffect(() => {
    const newsdata = NEWS_DATA.find((data) => data.id === newsId);
    setNewsInfo(newsdata);
  }, [newsId]);
  return (
    <View style={styles.mainContainer}>
      {newsInfo == null ? (
        <Text>Loading</Text>
      ) : (
        <>
          <View style={styles.headerInfo}>
            <Text style={styles.textHeading}>{newsInfo.heading}</Text>
            <Text style={styles.textCommon}>{newsInfo.info}</Text>
          </View>

          <View style={styles.conterContainer}>
            {newsInfo.counters.map((counter) => (
              <NewsConter key={counter.id} counter={counter}></NewsConter>
            ))}
          </View>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#030637",
    borderColor: "red",
    paddingTop: 40,
    paddingLeft: 10,
  },
  headerInfo: {
    backgroundColor: "#4A4DE7",
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  textHeading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  textCommon: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  conterContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
});
export default NewsInfo;
