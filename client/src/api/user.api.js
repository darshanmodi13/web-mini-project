import Axios from "../axiosInstance";

const userApi = {
  getProfile: async (id, onSuccess, onError) => {
    try {
      let res = await Axios().get(`/api/user/profile/${id}`);
      //   console.log(res);
      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
};
export default userApi;
