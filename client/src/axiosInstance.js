import axios from "axios";
import auth from "./utils/authMethods";

// const url = "https://eblog-project.herokuapp.com";
const url = "http://localhost:8080";

const axiosInstance = () => {
  let auth_token = null;

  let { token } = auth.getIdToken();
  auth_token = token ? token : "";

  const client = axios.create({
    baseURL: url,
    headers: {
      "content-Type": "application/json",
    },
  });
  return client;
};

export default axiosInstance;
