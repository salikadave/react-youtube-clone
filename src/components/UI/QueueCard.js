import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <div className={classes.card}>
      <div className={classes.row}>
        <img src="" alt={props.video.thumbnail} />
        <div>{props.video.title}</div>
        <div>{props.video.channelName}</div>
      </div>
    </div>
  );
};

export default QueueCard;
