import React from "react";
import { makeStyles } from "@mui/styles";

import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  "slider-container": {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: "9999",
    background: "black",
    color: "#fff",
    opacity: "0.9",
  },
  icon: {
    position: "absolute",
    top: "10px",
    left: "2%",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  li: {
    paddingTop: "8%",
    fontSize: "1.2rem",
  },
});

const Slider = ({ displaySidebar }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes["slider-container"]}>
        <div className={classes.icon}>
          <CloseIcon
            style={{ fontSize: "1.8rem", cursor: "pointer" }}
            onClick={() => {
              displaySidebar(false);
            }}
          />
        </div>
        <ul className={classes.ul}>
          <li className={classes.li}>Home</li>
          <li className={classes.li}>Home</li>
          <li className={classes.li}>Home</li>
          <li className={classes.li}>Home</li>
        </ul>
      </div>
    </>
  );
};

export default Slider;
