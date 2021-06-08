import { useEffect } from "react";
import ChipsContainer from "./ChipsContainer";
import VideosContainer from "./VideosContainer";

const HomeContent = (props) => {
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data.items);
  //     });
  // }, []);
  return (
    <div>
      <ChipsContainer />
      <VideosContainer />
    </div>
  );
};

export default HomeContent;
