import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  let viewCount = Math.round(props.video.views / 1000000);
  let viewCountString = "M";
  if (viewCount === 0) {
    viewCount = Math.round(props.video.views / 1000);
    viewCountString = "K";
  }

  const openVideoHandler = () => {
    history.push("/watch/" + props.video.id);
  };

  return (
    <Card
      variant="outlined"
      className={classes.root}
      onClick={openVideoHandler}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.video.image}
          title="Contemplative Reptile"
        />
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
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default ImgMediaCard;
