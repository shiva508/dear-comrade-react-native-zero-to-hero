import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import UiButton from "../ui/UiButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const navigationHandler = () => {
    navigation.navigate("Hero");
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textMainStyle}>Dear Telangana</Text>
          <Text style={styles.logo}>&#9997;</Text>
        </View>
        <View style={styles.navigationContainer}>
          <UiButton title="Explore" onPress={navigationHandler} />
        </View>
      </View>
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
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
    borderRadius: 12,
    padding: 12,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    paddingRight: 14,
    paddingLeft: 14,
    borderRadius: 12,
  },
  navigationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001C30",
    paddingRight: 4,
    paddingLeft: 4,
    borderBottomEndRadius: 12,
  },
  logo: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  textMainStyle: { fontWeight: "bold", fontSize: 24, color: "#fff" },
});
export default Home;
