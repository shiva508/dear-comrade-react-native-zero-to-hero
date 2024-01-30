import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const NEWS_DATA = [
  {
    id: "1",
    heading: "BRS Comes back to ruling again",
    info: "BRS gained people mandidate and gained confidence of telangana",
    counters: [
      {
        id: "1",
        counterParty: "BRS",
        counterPerson: "KTR",
        counterDetail:
          "It is peoples victory, we wanted to bring back what we lost in 4 years",
      },
      {
        id: "2",
        counterParty: "Congress",
        counterPerson: "Uttam Kumar",
        counterDetail:
          "Congratulations to BRS, congress lost people confidence",
      },
      {
        id: "3",
        counterParty: "BJP",
        counterPerson: "Bandi Sanjay",
        counterDetail: "BRS and Congress has aliance",
      },
    ],
  },
  {
    id: "2",
    heading: "IT picked up again",
    info: "BRS gained people mandidate and gained confidence of telangana",
    counters: [
      {
        id: "1",
        counterParty: "BRS",
        counterPerson: "KTR",
        counterDetail:
          "It is peoples victory, we wanted to bring back what we lost in 4 years",
      },
      {
        id: "2",
        counterParty: "Congress",
        counterPerson: "Uttam Kumar",
        counterDetail:
          "Congratulations to BRS, congress lost people confidence",
      },
      {
        id: "3",
        counterParty: "BJP",
        counterPerson: "Bandi Sanjay",
        counterDetail: "BRS and Congress has aliance",
      },
    ],
  },
  {
    id: "3",
    heading: "KCR big plan for agriculture",
    info: "BRS gained people mandidate and gained confidence of telangana",
    counters: [
      {
        id: "1",
        counterParty: "BRS",
        counterPerson: "KTR",
        counterDetail:
          "It is peoples victory, we wanted to bring back what we lost in 4 years",
      },
      {
        id: "2",
        counterParty: "Congress",
        counterPerson: "Uttam Kumar",
        counterDetail:
          "Congratulations to BRS, congress lost people confidence",
      },
      {
        id: "3",
        counterParty: "BJP",
        counterPerson: "Bandi Sanjay",
        counterDetail: "BRS and Congress has aliance",
      },
    ],
  },
];
const News = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        {NEWS_DATA.map((news) => (
          <View style={styles.innerContainer}>
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
