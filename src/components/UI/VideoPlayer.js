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
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/vWLcyFtni6`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />; */}
    </div>
  );
};

export default Example;
