import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const DcScrollNavigator = ({ scrollData }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {scrollData.map((item) => (
          <Pressable
            key={item.pageName}
            onPress={() => navigation.navigate(item.pageName)}
          >
            <View style={styles.background}>
              <ImageBackground
                resizeMode="cover"
                source={item.logo}
                style={styles.image}
              >
                <Text style={styles.text}>{item.pageName}</Text>
              </ImageBackground>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Text style={styles.text}>HI</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 2, flexDirection: "column" },
  text: {
    fontSize: 16,
    color: "#fff",
    padding: 40,
    margin: 4,
    fontWeight: "bold",
    borderColor: "#fff",
    //alignContent: "center",
    //alignItems: "center",
  },
  background: {
    margin: 4,
    borderRadius: 12,
    height: 400,
    width: 300,
    alignContent: "center",
    //alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
});
export default DcScrollNavigator;
