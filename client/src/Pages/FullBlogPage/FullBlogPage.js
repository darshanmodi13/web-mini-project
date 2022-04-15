import React, { useEffect, useState } from "react";
import styles from "./FullBlogPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import blogApi from "../../api/blog.api";
import { useSearchParams } from "react-router-dom";
import moment from "moment";

export default function FullBlogPage() {
  const [params] = useSearchParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let getBlog = async () => {
    let id = params.get("id");
    blogApi.getSingleBlog(
      id,
      (res) => {
        setBlog(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <>
      {Object.keys(blog).length !== 0 ? (
        <>
          <div>
            <Navbar />
          </div>
          <div className={styles.FullBlogPage}>
            <div className={styles.Imgcontainer}>
              <img src={blog.img_link} alt="" className={styles.FullPage} />
            </div>
            <div className={styles.blogcontainer}>
              <div className={styles.category_container}>
                <div className={styles.category}>
                  {blog.category_id.name.toUpperCase()}
                </div>
                <div className={styles.date}>
                  {moment(blog.created_at).format("MMMM Do, YYYY")}
                </div>
              </div>
              <h1 className={styles.details}>
                {blog.title}
              </h1>
              <p className={styles.content}>
              {blog.content}
              </p>
            </div>
            <Footer />
          </div>
        </>
      ) : null}
    </>
  );
}
