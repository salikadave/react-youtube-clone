import { useParams } from "react-router-dom";

import VideoPlayer from "../components/UI/VideoPlayer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const VideoPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div style={{ padding: 40, marginTop: 50, display: "flex" }}>
      <VideoPlayer videoId={id} />
    </div>
  );
};

export default VideoPage;
