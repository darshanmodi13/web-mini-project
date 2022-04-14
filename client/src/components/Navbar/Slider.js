import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import categoryApi from "../../api/category.api";

import { Link } from "react-router-dom";
import authMethods from "../../utils/authMethods";
import { actionTypes } from "../../actionTypes/actionType";

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
    color: "#fff",
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
  const { authState, authDispatch } = useGlobalContext();
  const navigate = useNavigate();
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
  const logout = () => {
    authDispatch({ type: actionTypes.SET_AUTHENTICATION, payload: false });
    authDispatch({ type: actionTypes.SET_ID, payload: null });
    authDispatch({ type: actionTypes.SET_TOKEN, payload: null });
    authMethods.clearStorage();
    navigate("/");
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
          <Link className={classes.li} to="/">
            Home
          </Link>
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
                        key={index}
                      >
                        {c.name.toUpperCase()}
                      </Link>
                    );
                  })
                : null}
            </ul>
          </li>
          {authState.authenticated ? (
            <>
              <Link to="/create" className={classes.li}>
                Create Blog
              </Link>
              <Link to="/update" className={classes.li}>
                Update Blog
              </Link>
              <li
                className={classes.li}
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </li>
            </>
          ) : (
            <Link to="/login" className={classes.li}>
              Login
            </Link>
          )}
          {/* <li className={classes.li}></li> */}
        </ul>
      </div>
    </>
  );
};

export default Slider;
