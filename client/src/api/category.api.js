import Axios from "../axiosInstance";

const categoryApi = {
  getList: async (onSucess, onError) => {
    try {
      let res = await Axios().get("/api/category/list");
      onSucess(res.data.data);
    } catch (error) {
      onError(error.response.data);
    }
  },
};

export default categoryApi;
