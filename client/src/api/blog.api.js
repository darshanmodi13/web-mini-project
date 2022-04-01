import Axios from "../axiosInstance";

const blogApi = {
  getList: async (onSuccess, onError) => {
    try {
      let res = await Axios().get("/api/blog/list");
      onSuccess(res.data.data)
    } catch (error) {
        console.log(error)
      onError(error.message);
    }
  },
};

export default blogApi;
