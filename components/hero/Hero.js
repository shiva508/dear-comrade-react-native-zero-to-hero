import { StyleSheet, Text } from "react-native";
import DcScrollNavigator from "../navigation/DcScrollNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

const DUMMY = [{ cardName: "News" }];

const SCROLL_DATA = [
  { pageName: "Movies" },
  { pageName: "News" },
  { pageName: "Stories" },
  { pageName: "Places" },
  { pageName: "History" },
  { pageName: "Agriculture" },
  { pageName: "IT" },
  { pageName: "Revenue" },
  { pageName: "Health" },
];

const Hero = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DcScrollNavigator
        scrollData={SCROLL_DATA}
        style={styles.scrollNavigator}
      />
      <Text style={{ color: "#fff", flex: 16 }}>Hero</Text>
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
