import { Pressable } from "react-native";

const UiPlayerIcon = ({ children, onPress }) => {
  const pressHandler = () => {
    onPress();
  };
  return <Pressable onPress={pressHandler}>{children}</Pressable>;
};
export default UiPlayerIcon;
