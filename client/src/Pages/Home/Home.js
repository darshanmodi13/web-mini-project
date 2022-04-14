import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
//components
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blog/Blog";
import NextPrevious from "../../components/NextPreviousComponent/NextPrevious";
import Footer from "../../components/Footer/Footer";
import blogApi from "../../api/blog.api";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getBlogs();
  }, []);
  let getBlogs = async () => {
    await blogApi.getList(
      (res) => {
        setBlogs(res);
      },
      () => {}
    );
  };
  const blogClicked = (e) => {
    let id = e.target.parentElement.id;
    if (id) {
      navigate(`/blog?id=${id}`);
    }
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="blog-container" onClick={blogClicked}>
          {blogs && blogs.length !== 0
            ? blogs.map((blog, index) => {
                return <Blog key={index} blog={blog} id={blog._id} />;
              })
            : null}
          <div style={{ flexBasis: "30%" }}></div>
          <div style={{ flexBasis: "30%" }}></div>
        </div>
        <NextPrevious />
        <Footer />
      </div>
    </>
  );
};

export default Home;
