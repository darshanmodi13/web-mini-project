import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

//component
import Slider from "./Slider";

const useStyles = makeStyles({
  nav: {
    position: "fixed",
    top: "0",
    width: "100%",
    display: "flex",
    paddingTop: "20px",
    alignItems: "center",
    background: "#fff",
    paddingBottom: "15px",
  },
  "menu-container": {
    flexBasis: "20%",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  icon: {
    paddingRight: "8px",
  },
  line: {
    width: "20px",
    background: "black",
    height: "2px",
    marginTop: "4px",
    fontWeight: "bold",
    borderRadius: "5px",
    "&:nth-child(2)": {
      width: "13px",
    },
  },
  "menu-name": {
    fontSize: "0.9rem",
    fontWeight: "500",
    "@media (max-width:768px)": {
      display: "none",
    },
  },
  header: {
    textAlign: "center",
    flexBasis: "50%",
    fontSize: "2.5rem",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontFamily: "'Dancing Script', cursive",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <>
      <div className={classes["nav-container"]}>
        <nav className={classes["nav"]}>
          <div
            className={classes["menu-container"]}
            onClick={() => {
              setIsMenuClicked(true);
            }}
          >
            <div className={classes.icon}>
              <div className={classes.line}></div>
              <div className={classes.line}></div>
              <div className={classes.line}></div>
            </div>
            <div className={classes["menu-name"]}>MENU</div>
          </div>
          <div className={classes.header}>Bloggr.com</div>
        </nav>
        {isMenuClicked ? <Slider displaySidebar={setIsMenuClicked} /> : null}
      </div>
    </>
  );
};

export default Navbar;
