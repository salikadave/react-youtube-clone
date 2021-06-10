import { makeStyles } from "@material-ui/core/styles";
import QueueContext from "../../store/queue-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
  media: {
    height: "100%",
    width: "100%",
    margin: 0,
  },
  avatar: {
    flexShrink: 1,
  },
}));

const QueueCard = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const queueCtx = useContext(QueueContext);

  const openVideoHandler = () => {
    history.push("/watch/" + props.video.id);
  };

  const removeFromQueueHandler = () => {
    queueCtx.removeFromQueue(props.video.id);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img
            src={props.video.image}
            className={classes.media}
            onClick={openVideoHandler}
            alt="channel"
          />
        }
        classes={{ avatar: classes.avatar }}
        action={
          <IconButton aria-label="settings">
            <DeleteIcon onClick={removeFromQueueHandler} />
          </IconButton>
        }
        title={props.video.title}
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
