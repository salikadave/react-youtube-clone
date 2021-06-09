import { useParams } from "react-router-dom";
import { useContext } from "react";

import VideoPlayer from "../components/UI/VideoPlayer";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import QueueCard from "../components/UI/QueueCard";
import QueueContext from "../store/queue-context";

const VideoPage = () => {
  const { id } = useParams();
  const queueCtx = useContext(QueueContext);

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
          minWidth: 250,
          maxWidth: 448,
          marginTop: 90,
        }}
      >
        <CardHeader
          title={<Typography style={{ fontWeight: "bold" }}>Queue</Typography>}
          subheader={queueStatus}
        />
        <CardContent>
          {videosInQueue.map((video) => (
            <QueueCard video={video} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPage;
