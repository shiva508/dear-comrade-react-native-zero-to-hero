import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const DcScrollNavigator = ({ scrollData, onNavigate }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {scrollData.map((item) => (
          <Pressable
            key={item.pageName}
            onPress={() => navigation.navigate(item.pageName)}
          >
            <Text style={styles.text}>{item.pageName}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row", height: 20 },
  text: {
    fontSize: 16,
    color: "#fff",
    borderRadius: 4,
    backgroundColor: "green",
    padding: 4,
    margin: 4,
    fontWeight: "bold",
    borderColor: "#fff",
  },
});
export default DcScrollNavigator;
