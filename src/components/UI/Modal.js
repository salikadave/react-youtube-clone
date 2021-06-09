import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import QueueCard from "./QueueCard";

const useStyles = makeStyles((theme) => ({
  modal: {
    boxShadow: theme.shadows[5],
    borderRadius: 6,
    backgroundColor: "white",
    padding: 1,
    height: 600,
    width: 450,
    zIndex: 10,
    position: "fixed",
    bottom: 0,
    right: 30,
  },
  video: {
    height: 250,
    width: 450,
  },
}));

const Modal = (props) => {
  const classes = useStyles();
  const videoDetails = {
    title: "title",
    channelName: "channelName",
    thumbnail: "thumbnail",
  };

  return (
    <div className={classes.modal}>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        className={classes.video}
      />
      <h3>Title of video playing</h3>
      <Divider />
      <QueueCard video={videoDetails} />
    </div>
  );
};

export default Modal;
