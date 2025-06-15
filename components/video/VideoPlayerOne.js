import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { MaterialIcons } from "@expo/vector-icons";
import UiPlayerIcon from "../ui/UiPlayerIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const DEFAULT_ORI_STYLE = {
  zIndex: 3,
  marginTop: -326,
  marginLeft: 20,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 25,
};

const LANDSCAPE_STYLE = {
  zIndex: 3,
  marginTop: -199,
  marginLeft: 10,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 25,
};
const PANNEL_CLEAR_STYLE = {
  display: "none",
};
const VideoPlayerOne = ({ route }) => {
  //console.log(route.params.url);
  let url = route.params.url;
  const [orientation, setOrientation] = useState(1);

  const [errorMsg, setErrorMsg] = useState("");
  const [buttonStyle, setButtonStyles] = useState({
    display: "none",
  });

  const video = useRef();
  const timer = useRef();

  const [status, setStatus] = useState({});
  useEffect(() => {
    //changeScreenOrientation();
  }, []);
  async function changeScreenOrientation() {
    const data = await ScreenOrientation.getOrientationAsync();

    if (data == 4) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
      setOrientation((preValue) => {
        return 1;
      });
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      setOrientation((preValue) => {
        return 4;
      });
    }
  }

  return (
    <View
      style={[styles.container, { marginTop: orientation == 1 ? 200 : 10 }]}
    >
      <Text>{errorMsg}</Text>
      <Video
        shouldPlay={true}
        onTouchStart={() => {
          setButtonStyles((preValue) => {
            let newVal = {};
            if (orientation !== 1) {
              newVal = DEFAULT_ORI_STYLE;
            } else {
              newVal = LANDSCAPE_STYLE;
            }
            return newVal;
          });
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            setButtonStyles((preValue) => {
              const newVal = PANNEL_CLEAR_STYLE;
              return newVal;
            });
          }, 2000);
        }}
        ref={video}
        videoStyle={styles.videoPlayer}
        style={[
          styles.video,
          {
            width: orientation == 1 ? 340 : 708,
            height: orientation == 1 ? 200 : 340,
          },
        ]}
        source={{
          uri: url,
        }}
        resizeMode={ResizeMode.STRETCH}
        useNativeControls={true}
        isLooping={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        progressUpdateIntervalMillis={500}
        onError={(error) => {
          console.log("Error");
          console.log(error);
          setErrorMsg("Error in video loading" + error);
        }}
      />
      <View style={buttonStyle}>
        <UiPlayerIcon
          style={{ padding: 20 }}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          {status.isPlaying ? (
            <Ionicons name="play" size={28} color="green" />
          ) : (
            <FontAwesome6 name="pause" size={28} color="green" />
          )}
        </UiPlayerIcon>
        <UiPlayerIcon onPress={changeScreenOrientation}>
          {orientation == 1 ? (
            <MaterialCommunityIcons
              name="phone-rotate-landscape"
              size={28}
              color="green"
            />
          ) : (
            <MaterialCommunityIcons
              name="phone-rotate-portrait"
              size={28}
              color="green"
            />
          )}
        </UiPlayerIcon>
        <UiPlayerIcon onPress={() => video.current.replayAsync()}>
          <MaterialIcons name="replay" size={28} color="green" />
        </UiPlayerIcon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 200,
    borderColor: "red",
  },
  buttons: {
    zIndex: 3,
    marginTop: -100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  videoPlayer: { backgroundColor: "#000" },
});
export default VideoPlayerOne;
