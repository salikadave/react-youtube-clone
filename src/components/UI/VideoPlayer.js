import React from "react";
import YouTube from "react-youtube";

const Example = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />; */}
      {/* <YouTube videoId="2g811Eo7K8U" />; */}
    </div>
  );
};

export default Example;
