import { useVideoPlayer, VideoView } from "expo-video";
import React, { useCallback, useRef, useState } from "react";
import { Button, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import TitledSwitch from "./TitledSwitch";
import * as ScreenOrientation from "expo-screen-orientation";

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
const VideoPlayerFour = ({ route }) => {
  let videoSource = route.params.url;
  const ref = useRef(null);
  const [orientation, setOrientation] = useState(1);
  const [buttonStyle, setButtonStyles] = useState({
    display: "none",
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [allowFullscreen, setAllowFullscreen] = useState(true);

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

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      ref.current?.enterFullscreen();
    } else {
      ref.current?.exitFullscreen();
    }
  }, [player]);

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.showNowPlayingNotification = true;
    player.play();
  });
  return (
    <View style={styles.contentContainer}>
      <VideoView
        ref={ref}
        player={player}
        onFullscreenEnter={() => {
          console.log("Entered Fullscreen");
          setIsFullscreen(true);
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
        onFullscreenExit={() => {
          console.log("Exited Fullscreen");
          setIsFullscreen(false);
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
        allowsFullscreen={allowFullscreen}
        style={[
          styles.video,
          {
            width: orientation == 1 ? 340 : 708,
            height: orientation == 1 ? 200 : 340,
          },
        ]}
      />
      <ScrollView>
        <View>
          <Button
            style={styles.button}
            title="Enter Fullscreen"
            onPress={changeScreenOrientation}
          />
          <View style={styles.row}>
            <TitledSwitch
              title="Allow Fullscreen"
              value={allowFullscreen}
              setValue={setAllowFullscreen}
              style={styles.switch}
              titleStyle={styles.switchTitle}
            />
          </View>
        </View>
      </ScrollView>
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
  controlsContainer: {
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  picker: {
    alignSelf: "stretch",
    backgroundColor: "#e0e0e0",
  },
  switch: {
    flex: 1,
    flexDirection: "column",
  },
  switchTitle: {
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.5,
    fontSize: 12,
    marginBottom: 2,
  },
  video: {
    width: 300,
    height: 225,
  },
  button: {
    margin: 5,
  },
  mediumText: {
    fontSize: 16,
  },
  centerText: {
    textAlign: "center",
  },
});
export default VideoPlayerFour;
