import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import styles from "./profile.module.css";
//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";
import { useNavigate, useSearchParams } from "react-router-dom";
import userApi from "../../api/user.api";
import blogApi from "../../api/blog.api";

const Profile = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let getDetails = async () => {
    let id = params.get("id");
    if (!id) navigate(-1);
    await userApi.getProfile(
      id,
      (res) => {
        // console.log(res);
        setUser(res.user);
        setBlogs(res.blog);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const blogClicked = (e) => {
    let id = e.target.parentElement.id;
    if (id) {
      navigate(`/blog?id=${id}`);
    }
  };

  const deleteBlog = async (id) => {
    await blogApi.deleteBlog(
      id,
      (res) => console.log(res),
      (err) => console.log(err)
    );
  };
  return (
    <>
      {Object.keys(user).length !== 0 ? (
        <>
          <div>
            <Navbar />
          </div>
          <div className="container">
            <div className={styles["profile-container"]}>
              <div className={styles.profile}>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.mobile}</div>
                <div className={styles.line}>
                  <hr className={styles.hr} />
                  <p className={styles.text}>Your Previous Blog</p>
                  <hr className={styles.hr} />
                </div>
              </div>
            </div>
            <div
              className="blog-container"
              onClick={blogClicked}
              style={{ marginTop: "0" }}
            >
              {blogs && blogs.length !== 0
                ? blogs.map((blog, index) => {
                    return (
                      <DeleteUpdateBtn
                        id={blog._id}
                        blog={blog}
                        key={index}
                        deleteBlog={deleteBlog}
                      />
                    );
                  })
                : null}
              <div style={{ flexBasis: "30%" }}></div>
              <div style={{ flexBasis: "30%" }}></div>
            </div>

            <Footer />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;

const DeleteUpdateBtn = ({ blog, id, deleteBlog }) => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ width: "30%", marginBottom: "10%" }}>
        <Blog blog={blog} id={blog._id} />
        <div
          style={{
            display: "flex",
            marginTop: "1%",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              color: "white",
              background: "red",
              border: "none",
              padding: "10px",
              marginLeft: "10px",
            }}
            onClick={() => {
              if (window.confirm("Do you want to delete this Blog? ")) {
                deleteBlog(blog._id);
              }
            }}
          >
            Delete
          </button>
          <button
            style={{
              color: "white",
              background: "Green",
              border: "none",
              padding: "10px",
              marginRight: "10px",
            }}
            onClick={() => {
              navigate(`/update?id=${id}`);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};
