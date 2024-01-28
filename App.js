import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DcStackNavigator from "./components/navigation/DcStackNavigator";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <DcStackNavigator></DcStackNavigator>
      </NavigationContainer>
      <StatusBar style="inverted" />
    </>
  );
}
