import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blog/Blog";
import NextPrevious from "../../components/NextPreviousComponent/NextPrevious";
import Footer from "../../components/Footer/Footer";
import blogApi from "../../api/blog.api";
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);
  let getBlogs = async () => {
    await blogApi.getList(
      (res) => {
        setBlogs(res)
      },
      () => {}
    );
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="blog-container">
          {blogs && blogs.length !== 0
            ? blogs.map((blog, index) => {
                return <Blog key={index} blog={blog} />;
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
