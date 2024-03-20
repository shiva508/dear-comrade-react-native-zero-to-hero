import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NEWS_DATA } from "../data/data";
const News = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        {NEWS_DATA.map((news) => (
          <View key={news.id} style={styles.innerContainer}>
            <Pressable
              key={news.id}
              android_ripple={styles.ripple}
              onPress={() => navigation.navigate("NewsInfo", { id: news.id })}
            >
              <Text style={styles.text}>{news.heading}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 10, backgroundColor: "#030637" },
  innerContainer: { overflow: "hidden", borderRadius: 8, margin: 10 },
  text: {
    margin: 2,
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 12,
    fontWeight: "bold",
  },
  ripple: {
    color: "green",
    borderless: false,
    foreground: true,
  },
});

export default News;
