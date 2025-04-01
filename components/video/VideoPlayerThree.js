import { useEvent } from "expo";
import * as ScreenOrientation from "expo-screen-orientation";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import UiPlayerIcon from "../ui/UiPlayerIcon";
import { MaterialIcons } from "@expo/vector-icons";
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

const VideoPlayerThree = ({ route }) => {
  let videoSource = route.params.url;
  const [orientation, setOrientation] = useState(1);

  const [buttonStyle, setButtonStyles] = useState({
    display: "none",
  });

  const [status, setStatus] = useState({});
  const changeScreenOrientation = async () => {
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
  };
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = false;
    player.showNowPlayingNotification = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });
  return (
    <View
      style={[styles.container, { marginTop: orientation == 1 ? 200 : 10 }]}
    >
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
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

      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default VideoPlayerThree;
