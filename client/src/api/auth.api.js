import Axios from "../axiosInstance";
// import axios from "axios";

const authApi = {
  register: async (body, onSucess, onError) => {
    try {
      let res = await Axios().post("/api/user/register", {
        ...body,
      });
      onSucess(res.data.data);
    } catch (error) {
      onError(error.response.data);
    }
  },
  signin: async (body, onSucess, onError) => {
    try {
      let res = await Axios().post("/api/user/signin", {
        ...body,
      });
      onSucess(res.data.data);
    } catch (error) {
      onError(error.response.data);
    }
  },
};

export default authApi;
