import { Pressable, StyleSheet, Text, View } from "react-native";

const UiButton = ({ title, onPress }) => {
  const onPressHandler = () => {
    onPress();
  };
  return (
    <View>
      <Pressable onPress={onPressHandler}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "green",
    padding: 8,
    borderRadius: 6,
  },
});
export default UiButton;
