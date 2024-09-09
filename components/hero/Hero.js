import { StyleSheet, Text } from "react-native";
import DcScrollNavigator from "../navigation/DcScrollNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

const DUMMY = [{ cardName: "News" }];

const SCROLL_DATA = [
  {
    pageName: "Movies",
    logo: {
      uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e22ff753131197.596c4c560ae3b.jpg",
    },
  },
  {
    pageName: "News",
    logo: {
      uri: "https://img.freepik.com/premium-vector/handsome-anchorman-breaking-news-tv-studio-cartoon-arabic-male-newsreader-character-flat-vector_985641-856.jpg",
    },
  },
  {
    pageName: "Stories",
    logo: {
      uri: "https://static.vecteezy.com/system/resources/previews/000/173/649/original/vector-bedtime-story.jpg",
    },
  },
  {
    pageName: "Places",
    logo: {
      uri: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/07/tajmahal-1.jpg",
    },
  },
  {
    pageName: "History",
    logo: {
      uri: "https://img.freepik.com/premium-vector/handsome-anchorman-breaking-news-tv-studio-cartoon-arabic-male-newsreader-character-flat-vector_985641-856.jpg",
    },
  },
  {
    pageName: "Agriculture",
    logo: {
      uri: "https://img.freepik.com/premium-vector/handsome-anchorman-breaking-news-tv-studio-cartoon-arabic-male-newsreader-character-flat-vector_985641-856.jpg",
    },
  },
  {
    pageName: "IT",
    logo: {
      uri: "https://img.freepik.com/premium-vector/handsome-anchorman-breaking-news-tv-studio-cartoon-arabic-male-newsreader-character-flat-vector_985641-856.jpg",
    },
  },
  {
    pageName: "Revenue",
    logo: {
      uri: "https://img.freepik.com/premium-vector/handsome-anchorman-breaking-news-tv-studio-cartoon-arabic-male-newsreader-character-flat-vector_985641-856.jpg",
    },
  },
  {
    pageName: "Health",
    logo: {
      uri: "https://img.freepik.com/premium-vector/handsome-anchorman-breaking-news-tv-studio-cartoon-arabic-male-newsreader-character-flat-vector_985641-856.jpg",
    },
  },
];

const Hero = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DcScrollNavigator
        scrollData={SCROLL_DATA}
        style={styles.scrollNavigator}
      />
      {/* <Text style={{ color: "#fff" }}>Hero</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030637",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollNavigator: { flex: 1, alignItems: "center", justifyContent: "center" },
});
export default Hero;
