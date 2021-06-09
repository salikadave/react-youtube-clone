import { useParams } from "react-router-dom";

import VideoPlayer from "../components/UI/VideoPlayer";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import QueueCard from "../components/UI/QueueCard";

const VideoPage = () => {
  const { id } = useParams();
  console.log(id);
  const videoDetails = {
    title: "title",
    channelName: "channelName",
    thumbnail: "thumbnail",
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: 40, marginTop: 50 }}>
        <VideoPlayer videoId={id} />
      </div>
      <Card
        style={{
          height: "auto",
          width: 500,
          // backgroundColor: "#eee",
          marginTop: 90,
        }}
      >
        <CardHeader
          title={<Typography style={{ fontWeight: "bold" }}>Queue</Typography>}
          subheader="1/3"
        />
        <QueueCard video={videoDetails} />
      </Card>
    </div>
  );
};

export default VideoPage;
