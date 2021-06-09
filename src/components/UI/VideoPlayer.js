// import React from "react";
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
    event.target.playVideo();
  };

  return (
    <div style={{ height: 100 }}>
      {/* <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/vWLcyFtni6U`}
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        allowFullScreen
        title="Embedded youtube"
      /> */}
      <YouTube videoId="vWLcyFtni6U" opts={opts} onReady={onReady} />;
    </div>
  );
};

export default Example;
