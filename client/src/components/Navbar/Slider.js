import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import categoryApi from "../../api/category.api";

import { Link } from "react-router-dom";

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
  categories: {
    listStyle: "none",
    display: "none",
    flexDirection: "column",
  },
  category: {
    paddingTop: "20px",
    color: "#fff",
  },
  rotate: {
    transform: "rotate(180deg)",
  },
});

const Slider = ({ displaySidebar }) => {
  const classes = useStyles();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const rotateArrow = (e) => {
    let arrow = document.querySelector(".arrow");
    if (arrow.classList.contains(classes.rotate)) {
      document.querySelector(`.${classes.categories}`).style.display = "none";
      arrow.classList.remove(classes.rotate);
    } else {
      document.querySelector(`.${classes.categories}`).style.display = "flex";
      arrow.classList.add(classes.rotate);
    }
  };
  const getCategories = async () => {
    categoryApi.getList(
      (res) => {
        setCategory(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };
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
          <li className={classes.li}>
            <div>
              Category{" "}
              <KeyboardArrowDownIcon
                className={`arrow`}
                onClick={rotateArrow}
              />
            </div>
            <ul className={classes.categories}>
              {category && category.length > 0
                ? category.map((c, index) => {
                    return (
                      <Link
                        to={`/category?category_id=${c._id}`}
                        className={classes.category}
                      >
                        {c.name.toUpperCase()}
                      </Link>
                    );
                  })
                : null}
            </ul>
          </li>
          <li className={classes.li}>Login</li>
          {/* <li className={classes.li}></li> */}
        </ul>
      </div>
    </>
  );
};

export default Slider;
