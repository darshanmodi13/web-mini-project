import { makeStyles } from "@mui/styles";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
const useStyles = makeStyles({
  "footer-container": {
    position:'relative',
    padding: "20px",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flexBasis: "30%",
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontFamily: "'Dancing Script', cursive",
  },
  trademark: {
    display: "flex",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <hr style={{ width: "90%", marginLeft: "5%", marginTop: "2%" }} />
      <div className={classes["footer-container"]}>
        <div className={classes.footer}>Bloggr.com</div>
        <div className={classes.trademark}>
          <CopyrightIcon />
          <span style={{ paddingLeft: "5px" }}>Group No 15</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
