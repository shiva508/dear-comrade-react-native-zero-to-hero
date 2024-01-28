import VideoPlayerOne from "../video/VideoPlayerOne";

const VIDEO_URLS = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
];
const Movies = () => {
  return <VideoPlayerOne url={VIDEO_URLS[0]} />;
};
export default Movies;
