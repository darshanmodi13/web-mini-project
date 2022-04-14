import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import blog from "../../assets/blog.jpeg";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import authMethods from "../../utils/authMethods";
import { useNavigate } from "react-router-dom";
//api
import authApi from "../../api/auth.api";
import { actionTypes } from "../../actionTypes/actionType";
//styles
const useStyles = makeStyles({
  "login-container": {
    width: "100%",
    height: "100vh",
    top: "0",
    display: "flex",
  },
  login: {
    flexBasis: "30%",
    "@media (max-width:1000px)": {
      flexBasis: "100%",
    },
  },
  "img-container": {
    flexBasis: "70%",
    "@media (max-width:1000px)": {
      display: "none",
    },
  },
  img: {
    maxHeight: "100vh",
    width: "100%",
  },
  "input-container": {
    maxHeight: "100vh",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    flexBasis: "10%",
  },
  input: {
    flexBasis: "10%",
    width: "100%",
    textAlign: "center",
  },
  text: {
    width: "90%",
    border: "2px solid black",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "3%",
    outline: "none",
  },
  btn: {
    width: "90%",
    color: "#fff",
    background: "black",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "3%",
    border: "2px solid black",
    outline: "none",
  },
});

const Login = () => {
  const classes = useStyles();
  const [err, setErr] = useState("");
  const { authState, authDispatch } = useGlobalContext();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    mobile: "",
    password: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "mobile") {
      if (Number.isNaN(Number(e.target.value)) || e.target.value === " ") {
        return;
      }
    }
    setInput((oldVal) => {
      return {
        ...oldVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitForm = () => {
    if (!input.mobile || input.mobile.length !== 10) {
      setErr("Provide valid Mobile no.");
      return;
    } else if (!input.password || input.password.length < 8) {
      setErr("Provide atleast 8 letter/digit password");
      return;
    }
    authApi.signin(
      input,
      (res) => {
        authDispatch({ type: actionTypes.SET_AUTHENTICATION, payload: true });
        authDispatch({ type: actionTypes.SET_ID, payload: res._id });
        authDispatch({ type: actionTypes.SET_TOKEN, payload: res.token });
        authMethods.setIdToken(res._id, res.token);
        navigate("/");
      },
      (err) => {
        console.log(err);
        setErr(err.message.err);
      }
    );
  };
  return (
    <>
      <div>
        <div style={{ position: "relative" }}>
          <Navbar />
        </div>
        <div className={classes["login-container"]}>
          <div className={classes.login}>
            <div className={classes["input-container"]}>
              <div style={{ flexBasis: "20%" }}></div>
              <div className={classes.header}>Welcome Back!</div>
              {err ? (
                <div className="err">
                  {err}
                  <Close
                    className="close"
                    style={{ fontSize: "1rem" }}
                    onClick={() => {
                      setErr("");
                    }}
                  />
                </div>
              ) : null}
              <div className={classes.input}>
                <input
                  type="text"
                  className={classes.text}
                  placeholder="Enter mobile no"
                  value={input.mobile}
                  name="mobile"
                  maxLength="10"
                  onChange={handleInput}
                />
                <input
                  type="password"
                  className={classes.text}
                  placeholder="Enter at least 8 letter/digit password"
                  value={input.password}
                  name="password"
                  onChange={handleInput}
                />
              </div>

              <button className={classes.btn} onClick={submitForm}>
                Sign in
              </button>
              <div style={{ marginTop: "2%" }}>
                Don't have account ? <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
          "
          <div className={classes["img-container"]}>
            <img src={blog} alt="img" className={classes.img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
