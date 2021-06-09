import YouTube from "react-youtube";

const VideoPlayer = (props) => {
  const opts = {
    height: "540",
    width: "900",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube videoId={props.videoId} opts={opts} onReady={onReady} />;
    </div>
  );
};

export default VideoPlayer;

// https://developers.google.com/youtube/player_parameters
