import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";
import { Button, Dimensions, View } from "react-native";
import { StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const VideoPlayerOne = ({ url }) => {
  const [orientation, setOrientation] = useState(1);
  const [buttonStyle, setButtonStyles] = useState({
    display: "none",
  });
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
  const video = useRef();
  const [status, setStatus] = useState({});

  return (
    <View
      style={[styles.container, { marginTop: orientation == 1 ? 200 : 10 }]}
    >
      <Video
        onTouchStart={() => {
          setButtonStyles((preValue) => {
            let newVal = {};
            if (orientation !== 1) {
              newVal = {
                zIndex: 3,
                marginTop: -326,
                marginLeft: 475,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              };
            } else {
              newVal = {
                zIndex: 3,
                marginTop: -199,
                marginLeft: 120,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              };
            }
            return newVal;
          });
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            setButtonStyles((preValue) => {
              const newVal = {
                display: "none",
              };
              return newVal;
            });
          }, 1000);
        }}
        ref={video}
        videoStyle={{ borderColor: "red" }}
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
      />
      <View style={buttonStyle}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
        <Button title="Orientation" onPress={changeScreenOrientation} />
        <Button title="Replay" onPress={() => video.current.replayAsync()} />
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
});
export default VideoPlayerOne;
