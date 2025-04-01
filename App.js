import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import DcStackNavigator from "./components/navigation/DcStackNavigator";
import VideoPlayerThree from "./components/video/VideoPlayerThree";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <DcStackNavigator></DcStackNavigator>
      </NavigationContainer>
      {/* <VideoPlayerThree /> */}
      <StatusBar style="inverted" />
    </>
  );
}
