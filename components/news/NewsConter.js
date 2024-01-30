import { Text, View } from "react-native";

const NewsConter = ({ counter }) => {
  return (
    <View>
      <Text>{counter.counterParty}</Text>
      <Text>{counter.counterPerson}</Text>
      <Text>{counter.counterDetail}</Text>
    </View>
  );
};
export default NewsConter;
