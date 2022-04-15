import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import categoryApi from "../../api/category.api";
import { useGlobalContext } from "../../contexts/GlobalContext";
import blogApi from "../../api/blog.api";
import { useNavigate } from "react-router-dom";

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
  dropdown: {
    fontSize: "1rem",
    padding: "10px",
    width: "70vw",
    border: "none",
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

const NewBlog = ({ blog, image, upload }) => {
  const classes = useStyles();
  const [newBlog, setNewBlog] = useState(blog);
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState(image);
  const { authState } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    setNewBlog(blog);
    setImg(image);
  }, []);
  useEffect(() => {
    getCategory();
  }, []);

  let getCategory = async () => {
    await categoryApi.getList(
      (res) => {
        setCategory(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  let displayImg = async (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    getBase64(e.target.files[0], (res) => {
      // console.log(res);
      setNewBlog((oldData) => {
        return {
          ...oldData,
          img_link: res,
        };
      });
      // console.log(newBlog);
    });
  };

  let inputChanged = (e) => {
    setNewBlog((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value,
      };
    });
  };

  let getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      cb(base64String);
    };
    reader.onerror = () => console.log("Erorr");
  };
  return (
    <>
      <div className={classes.write}>
        {img ? <img src={img} alt="img" className={classes.writeimg} /> : null}
        <form className={classes.writeform}>
          <div className={classes.writeformgroup}>
            <label htmlFor="fileInput">
              <AddIcon className={classes.writeicon} />
            </label>
            <input
              type="file"
              id="fileInput"
              className={classes.hide}
              onChange={displayImg}
            />
            <input
              type="text"
              placeholder="Title"
              className={classes.writeinput}
              name="title"
              onChange={inputChanged}
              value={newBlog.title}
            />
          </div>
          {category && category.length !== 0 ? (
            <div className={classes.writeformgroup}>
              <select
                className={classes.dropdown}
                name="category_id"
                onChange={inputChanged}
                value={newBlog.category_id ? newBlog.category_id : "select"}
              >
                <option value="select">Select</option>
                {category.map((c, key) => {
                  return (
                    <option value={c._id} key={key}>
                      {c.name.toUpperCase()}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}
          <div className={classes.writeformgroup}>
            <textarea
              placeholder="Write your blog ...."
              className={classes.writeinput1}
              rows="10"
              name="content"
              onChange={inputChanged}
              value={newBlog.content}
            ></textarea>
          </div>
          <button
            className={classes.writesubmit}
            onClick={(e) => {
              upload(e, newBlog);
            }}
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
