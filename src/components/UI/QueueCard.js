import { makeStyles } from "@material-ui/core/styles";
import QueueContext from "../../store/queue-context";
import { useContext } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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

  return (
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
