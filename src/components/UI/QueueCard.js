import { makeStyles } from "@material-ui/core/styles";
import QueueContext from "../../store/queue-context";
import { useContext } from "react";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "30%",
    width: "30%",
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
  const video = {};
  return (
    // <div className={classes.card}>
    //   <div className={classes.row}>
    //     {/* <img src="" alt={props.video.image} /> */}
    //     <div>{props.video.title}</div>
    //     <div>{props.video.channel}</div>
    //     <Button size="small" color="primary" onClick={removeFromQueueHandler}>
    //       Remove from queue
    //     </Button>
    //   </div>
    // </div>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <CardMedia
            className={classes.media}
            component="img"
            image={props.video.image}
            title="Video Thumbnail"
          />
        }
        action={
          <IconButton aria-label="settings">
            <DeleteIcon onClick={removeFromQueueHandler} />
          </IconButton>
        }
        title={
          <Typography noWrap align="left">
            {props.video.title}
          </Typography>
        }
        subheader={
          <div>
            <Typography align="left" color="textSecondary" component="p">
              {props.video.channel}
            </Typography>
          </div>
        }
      />
    </Card>
  );
};

export default QueueCard;
