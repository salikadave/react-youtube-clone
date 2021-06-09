import { makeStyles } from "@material-ui/core/styles";
import QueueContext from "../../store/queue-context";
import { useContext } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#eee",
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
}));

const QueueCard = (props) => {
  const classes = useStyles();

  const queueCtx = useContext(QueueContext);

  const removeFromQueueHandler = () => {
    queueCtx.removeFromQueue(props.video.id);
  };

  console.log(props.video);
  console.log("Hello");
  return (
    <div className={classes.card}>
      <div className={classes.row}>
        {/* <img src="" alt={props.video.image} /> */}
        <div>{props.video.title}</div>
        <div>{props.video.channel}</div>
        <Button size="small" color="primary" onClick={removeFromQueueHandler}>
          Remove from queue
        </Button>
      </div>
    </div>
  );
};

export default QueueCard;
