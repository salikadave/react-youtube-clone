import Chip from "@material-ui/core/Chip";
import { useTheme } from "@material-ui/core/styles";

const ChipsContainer = (props) => {
  const { palette } = useTheme();
  const chipColor = palette.secondary.main;
  return (
    <div style={styles.container}>
      <Chip
        color="secondary"
        // variant="outlined"
        label="All"
        onClick={() => {}}
      />
    </div>
  );
};

const styles = {
  container: {
    height: 50,
    border: "1px solid #ccc",
    padding: "8px",
    display: "flex",
  },
};

export default ChipsContainer;
