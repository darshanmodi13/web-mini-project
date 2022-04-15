import React from "react";

//components
import Navbar from "../../components/Navbar/Navbar";
import NewBlog from "../../components/NewBlog/NewBlog";
import Footer from "../../components/Footer/Footer";
import blogApi from "../../api/blog.api";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const initState = {
  title: "",
  content: "",
  img_link: "",
  category_id: null,
};

export const CreateBlog = () => {
  const { authState } = useGlobalContext();
  const navigate = useNavigate();
  let upload = (e, newBlog) => {
    e.preventDefault();
    blogApi.uploadBlog(
      authState.id,
      newBlog,
      (res) => {
        navigate(`/`);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <div className="container">
      <div style={{ position: "relative" }}>
        <Navbar />
        <div style={{ marginTop: "2%" }}>
          <NewBlog blog={initState} image={null} upload={upload} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
