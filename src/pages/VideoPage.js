import { useParams } from "react-router-dom";
import { useContext } from "react";

import VideoPlayer from "../components/UI/VideoPlayer";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import QueueCard from "../components/UI/QueueCard";
import QueueContext from "../store/queue-context";

const VideoPage = () => {
  const { id } = useParams();
  const queueCtx = useContext(QueueContext);

  // console.log(id);
  // const videoDetails = [{
  //   title: "title",
  //   channel: "channelName",
  //   image: "thumbnail",
  // }];
  const videosInQueue = queueCtx.queue;

  console.log("Queue", videosInQueue);

  const queueStatus = queueCtx.currentItem(id) + "/" + queueCtx.totalInQueue;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: 40, marginTop: 50 }}>
        <VideoPlayer videoId={id} />
      </div>
      <Card
        style={{
          height: "auto",
          width: 250,
          // backgroundColor: "#eee",
          marginTop: 90,
        }}
      >
        <CardHeader
          title={<Typography style={{ fontWeight: "bold" }}>Queue</Typography>}
          subheader={queueStatus}
        />
        {console.log("123")}
        {videosInQueue.map((video) => (
          <QueueCard video={video} />
        ))}
        {/* <QueueCard video={videosInQueue[0]} /> */}
      </Card>
    </div>
  );
};

export default VideoPage;
