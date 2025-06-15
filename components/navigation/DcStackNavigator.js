import { createStackNavigator } from "@react-navigation/stack";
import Hero from "../hero/Hero";
import Home from "../home/Home";
import Movies from "../movies/Movies";
import VideoPlayerOne from "../video/VideoPlayerOne";
import News from "../news/News";
import NewsInfo from "../news/NewsInfo";
import VideoPlayerThree from "../video/VideoPlayerThree";
import VideoPlayerFour from "../video/VideoPlayerFour";

const Stack = createStackNavigator();
const DcStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Hero"
        component={Hero}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="VideoPlayerFour"
        component={VideoPlayerFour}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="VideoPlayerThree"
        component={VideoPlayerThree}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="VideoPlayerOne"
        component={VideoPlayerOne}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="News"
        component={News}
        options={{ headerShown: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="NewsInfo"
        component={NewsInfo}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default DcStackNavigator;
