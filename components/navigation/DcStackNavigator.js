import { createStackNavigator } from "@react-navigation/stack";
import Hero from "../hero/Hero";
import Home from "../home/Home";
import Movies from "../movies/Movies";

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
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default DcStackNavigator;
