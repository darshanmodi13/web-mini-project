import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
//components
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blog/Blog";
import NextPrevious from "../../components/NextPreviousComponent/NextPrevious";
import Footer from "../../components/Footer/Footer";
import blogApi from "../../api/blog.api";
import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  let id = params.get("category_id");
  useEffect(() => {
    getBlogs();
  }, [id]);
  let getBlogs = async () => {
    if (!id) navigate(-1);
    await blogApi.getBlogsByCategory(
      id,
      (res) => {
        setBlogs(res);
      },
      (err) => {
        console.log(err);
        navigate(-1);
      }
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
        {blogs && blogs.length !== 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "10%",
              letterSpacing: "1px",
            }}
          >
            <h1>{blogs[0].category_id.name.toUpperCase()}</h1>
          </div>
        ) : null}
        <div
          className="blog-container"
          onClick={blogClicked}
          style={{ margin: "0" }}
        >
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

export default Category;
