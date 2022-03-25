import React from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import img from "../../assets/blog1.jpeg";
const useStyles = makeStyles({
  write: {
    paddingTop: "50px",
    height: "100%",
    width: "100%",
  },
  writeform: {
    position: "relative",
  },
  writeformgroup: {
    marginLeft: "10%",
    display: "flex",
    alignItems: "center",
  },
  hide: {
    display: "none",
  },
  writeinput: {
    fontSize: "1.5rem",
    border: "none",
    padding: "20px",
    width: "70vw",
  },
  writeinput1: {
    fontSize: "1rem",
    border: "none",
    padding: "1%",
    width: "70vw",
  },
  writesubmit: {
    position: "absolute",
    bottom: "100%",
    right: "5%",
    color: "white",
    backgroundColor: "green",
    padding: "0.8%",
    border: "none",
    borderRadius: "5%",
    cursor: "pointer",
    fontSize: "1.25rem",
  },
  writeicon: {
    width: "5%",
    height: "5%",
    border: "1px solid",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    color: "gray",
    cursor: "pointer",
  },
  writeimg: {
    marginLeft: "10%",
    width: "70vw",
    height: "70vh",
    borderRadius: "20px",
    objectFit: "cover",
  },
});

const NewBlog = ({ title = "", content = "" }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.write}>
        <img src={img} alt="img" className={classes.writeimg} />
        <form className={classes.writeform}>
          <div className={classes.writeformgroup}>
            <label htmlFor="fileInput">
              <AddIcon className={classes.writeicon} />
            </label>
            <input type="file" id="fileInput" className={classes.hide} />
            <input
              type="text"
              placeholder="Title"
              className={classes.writeinput}
              value={title}
            />
          </div>
          <div className={classes.writeformgroup}>
            <textarea
              placeholder="Write your blog ...."
              className={classes.writeinput1}
              rows="10"
            >
              {content}
            </textarea>
          </div>
          <button className={classes.writesubmit}>Post</button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
