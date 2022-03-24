import { makeStyles } from "@mui/styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({
  "next-container": {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: "2%",
    marginBottom: "2%",
    margin: "auto",
  },
  style: {
    display: "flex",
    justifyContent: "center",
    background: "black",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid black",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: "1rem",
  },
  previous: {
    flexBasis: "20%",
  },
  next: {
    flexBasis: "20%",
  },
});
const NextPrevious = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes["next-container"]}>
        <div className={`${classes.previous} ${classes.style}`}>
          <KeyboardArrowLeftIcon /> Previous{" "}
        </div>
        <div className={`${classes.next} ${classes.style}`}>
          Next <KeyboardArrowRightIcon />{" "}
        </div>
      </div>
    </>
  );
};

export default NextPrevious;
