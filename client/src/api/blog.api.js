import Axios from "../axiosInstance";

const blogApi = {
  getList: async (onSuccess, onError) => {
    try {
      let res = await Axios().get("/api/blog/list");
      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
  getSingleBlog: async (id, onSuccess, onError) => {
    try {
      let res = await Axios().get(`/api/blog/${id}`);
      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
  uploadBlog: async (id, body, onSuccess, onError) => {
    try {
      let res = await Axios().post(`/api/blog/${id}/create`, { ...body });
      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
  deleteBlog: async (id, onSuccess, onError) => {
    try {
      let res = await Axios().delete(`/api/blog/${id}`);
      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
  updateBlog: async (id, body, onSuccess, onError) => {
    try {
      let res = await Axios().put(`/api/blog/${id}`, { ...body });

      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
  getBlogsByCategory: async (category_id, onSuccess, onError) => {
    try {
      let res = await Axios().get(`/api/blog/category/${category_id}`);
      onSuccess(res.data.data);
    } catch (error) {
      console.log(error);
      onError(error.response.data);
    }
  },
};

export default blogApi;
