import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import blog from "../../assets/blog.jpeg";
import { Close } from "@mui/icons-material";

//api
import authApi from "../../api/auth.api";

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

const Register = () => {
  const classes = useStyles();
  const [err, setErr] = useState(null);
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    retype_pwd: "",
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
    if (!input.name) {
      setErr("Provide name.");
      return;
    } else if (!input.mobile || input.mobile.length !== 10) {
      setErr("Provide valid Mobile no.");
      return;
    } else if (!input.email || !validateEmail(input.email)) {
      setErr("Provide valid email.");
      return;
    } else if (!input.password || input.password.length < 8) {
      setErr("Provide atleast 8 letter/digit password");
      return;
    } else if (input.password !== input.retype_pwd) {
      setErr("Password does not match");
      return;
    }
    let { retype_pwd, ...data } = input;
    authApi.register(
      data,
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
              <div className={classes.header}>Register</div>
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
                  placeholder="Enter Name"
                  name="name"
                  value={input.name}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  className={classes.text}
                  placeholder="Enter mobile no"
                  maxLength={10}
                  name="mobile"
                  value={input.mobile}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  className={classes.text}
                  placeholder="Enter email"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                />
                <input
                  type="password"
                  className={classes.text}
                  name="password"
                  value={input.password}
                  onChange={handleInput}
                  placeholder="Enter at least 8 letter/digit Password"
                />
                <input
                  type="password"
                  className={classes.text}
                  placeholder="Retype Password"
                  name="retype_pwd"
                  value={input.retype_pwd}
                  onChange={handleInput}
                />
              </div>

              <button className={classes.btn} onClick={submitForm}>
                Sign in
              </button>
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

export default Register;
