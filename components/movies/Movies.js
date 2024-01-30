import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const VIDEO_URLS = [
  {
    name: "Big Buck Bunny",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    cover: require("../../assets/bbb-splash.png"),
  },
  {
    name: "Big Buck Bunny (Short)",
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    cover: require("../../assets/bbb-splash.png"),
  },
  {
    name: "Gelupu Thalupule Song Posting 💉❤️",
    url: "https://dear-comrade-media.s3.ap-south-1.amazonaws.com/Gelupu+Thalupule.mp4",
    cover: require("../../assets/Theenmaar_Gelupu Talupule.jpg"),
  },
  {
    name: "Palletoori (Unplugged)",
    url: "https://dear-comrade-media.s3.ap-south-1.amazonaws.com/Double+Engine+-+Palletoori.mp4",
    cover: require("../../assets/double-engine.jpeg"),
  },
  {
    name: "Moon Knight",
    url: "https://dear-comrade-media.s3.ap-south-1.amazonaws.com/moon-Knight.mp4",
    cover: require("../../assets/moon-knight.jpg"),
  },
  {
    name: "Hello Neredu Kalla Dana",
    url: "https://dear-comrade-media.s3.ap-south-1.amazonaws.com/Hello+Neredu+Kalla.mp4",
    cover: require("../../assets/Seenu.jpg"),
  },
  {
    name: "Gopala Gopala",
    url: "https://dear-comrade-media.s3.ap-south-1.amazonaws.com/Bhaje+Bhaaje.mp4",
    cover: require("../../assets/gopal-gopala.jpeg"),
  },
];
const Movies = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {VIDEO_URLS.map((item) => (
          <Pressable
            key={item.name}
            onPress={() =>
              navigation.navigate("VideoPlayerOne", { url: item.url })
            }
          >
            <View style={styles.videoContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Image style={styles.image} source={item.cover}></Image>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#030637",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  videoContainer: {
    width: 250,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 5,
    margin: 10,
    borderRadius: 12,
  },
  image: { width: 200, height: 100 },
});
export default Movies;
