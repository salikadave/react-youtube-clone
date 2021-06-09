import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

//
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
//
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import QueueContext from "../../store/queue-context";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 5,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
    // width: "20"
  },
});

const ImgMediaCard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const history = useHistory();

  const queueCtx = useContext(QueueContext);

  let viewCount = Math.round(props.video.views / 1000000);
  let viewCountString = "M";
  if (viewCount === 0) {
    viewCount = Math.round(props.video.views / 1000);
    viewCountString = "K";
  }

  const openVideoHandler = () => {
    history.push("/watch/" + props.video.id);
  };

  const addToQueueHandler = () => {
    queueCtx.addToQueue(props.video);
    history.push("/watch/" + props.video.id);
  };

  return (
    <Card variant="outlined" className={classes.root}>
      <CardMedia
        className={classes.media}
        // component="img"
        alt="videoThumbnail"
        image={props.video.image}
        title="Video Title"
        onClick={openVideoHandler}
      />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.video.channel[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={handleClick} />
          </IconButton>
        }
        title={
          <Typography variant="p" component="h4" align="left">
            {props.video.title}
          </Typography>
        }
        subheader={
          <div>
            <Typography
              align="left"
              color="textSecondary"
              variant="p"
              component="p"
            >
              {props.video.channel}
            </Typography>
            <Typography
              align="left"
              color="textSecondary"
              variant="p"
              component="p"
            >
              {viewCount} {viewCountString} Views • {props.video.timestamp}
            </Typography>
          </div>
        }
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={addToQueueHandler}>
          <PlaylistPlayIcon />
          Add to Queue
        </MenuItem>
      </Menu>
      {/* {=======} */}
      {/* <CardActionArea>
        <CardContent>
          <Typography noWrap gutterBottom variant="h6" component="h3">
            {props.video.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.video.channel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {viewCount}
            {viewCountString} views
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.video.timestamp}
          </Typography>
        </CardContent>
      </CardActionArea> */}
    </Card>
  );
};

export default ImgMediaCard;
