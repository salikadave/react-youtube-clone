import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChipsContainer from "./ChipsContainer";
import ImgMediaCard from "../UI/ImgMediaCard";
import { DateTime, Duration } from "luxon";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const HomeContent = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.items);
        const videos = [];

        for (const item of data.items) {
          const video = {
            id: item.id,
            title: item.snippet.title,
            image: item.snippet.thumbnails.medium.url,
            views: item.statistics.viewCount,
            timestamp: DateTime.fromISO(item.snippet.publishedAt).toRelative(),
            channel: item.snippet.channelTitle,
            duration: Duration.fromISO(item.contentDetails.duration).toObject(),
          };

          videos.push(video);
        }

        console.log(videos);
        setIsLoading(false);
        setLoadedVideos(videos);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100%" }}>
      <ChipsContainer />
      <div className={classes.root}>
        <GridList
          cellHeight={400}
          // cellWidth={200}
          className={classes.gridList}
          cols={4}
        >
          {loadedVideos.map((video) => (
            <GridListTile key={video.id}>
              <ImgMediaCard video={video} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default HomeContent;
