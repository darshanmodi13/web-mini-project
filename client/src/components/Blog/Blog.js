import React from "react";
import { makeStyles } from "@mui/styles";

//img
import img from "../../assets/img.jpeg";

const useStyles = makeStyles({
  blog: {
    flexBasis: "30%",
    height: "100%",
    marginTop: "2%",
    "@media (max-width:820px)": {
      flexBasis: "45%",
    },
    "@media (max-width:412px)": {
      flexBasis: "90%",
    },
  },
  img: {
    height: "80%",
    width: "90%",
    borderRadius: "10px",
    transition: "0.3s all",
    "&:hover": {
      width: "95%",
      boxShadow: "5px 5px 5px 5px #a9a9a9",
    },
  },
  header: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    "@media (max-width:412px)": {
      fontSize: "1.3rem",
    },
  },
  "date-container": {
    width: "50%",
    display: "flex",
    fontSize: "12px",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "2%",
  },
  category: {
    flexBasis: "30%",
    color: "#00000099",
    letterSpacing: "1px",
    background: "#EFEFEF",
    padding: "5px",
    marginLeft: "5px",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      background: "black",
    },
  },
});

const Blog = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.blog}>
        <img src={img} alt="img" className={classes.img} />
        <div className={classes["date-container"]}>
          <div className={classes.category}>Blog</div>
          <div>March 21,2022</div>
        </div>
        <div className={classes.header}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </div>
      </div>
    </>
  );
};

export default Blog;
