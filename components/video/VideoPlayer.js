import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";

const VideoPlayer = () => {
  const video = useRef();
  const [status, setStatus] = useState({});
  const onBuffer = () => {};
  const videoError = () => {};
  return (
    <View style={styles.container}>
      <Video
        audioPan={<Button title="Add"></Button>}
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        resizeMode={ResizeMode.STRETCH}
        useNativeControls={false}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        progressUpdateIntervalMillis={500}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-starts",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default VideoPlayer;
