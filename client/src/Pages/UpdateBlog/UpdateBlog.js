import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from "../../components/Navbar/Navbar";
import NewBlog from "../../components/NewBlog/NewBlog";
import Footer from "../../components/Footer/Footer";
import blogApi from "../../api/blog.api";
import categoryApi from "../../api/category.api";
import { useNavigate, useSearchParams } from "react-router-dom";

const initState = {
  title: "",
  content: "",
  img_link: "",
  category_id: null,
};

export const UpdateBlog = () => {
  const { authState } = useGlobalContext();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [blog, setBlog] = useState(initState);
  useEffect(() => {
    getData();
  });
  let getBase64 = async (file, res) => {
    const data = await fetch(file);
    const blob = await data.blob();
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      res.img_link = base64String;
    };
    reader.onerror = () => console.log("Erorr");
  };
  const getData = async () => {
    let id = params.get("id");
    await blogApi.getSingleBlog(
      id,
      async (res) => {
        res.category_id = res.category_id._id;
        let img_link = res.img_link;
        await getBase64(res.img_link, res);
        await setBlog(res);
        await setImg(img_link);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  let update = (e, newBlog) => {
    e.preventDefault();
    let id = params.get("id");
    blogApi.updateBlog(
      id,
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
    <>
      {blog && img ? (
        <>
          <div className="container">
            <div style={{ position: "relative" }}>
              <Navbar />
              <div style={{ marginTop: "2%" }}>
                <NewBlog image={img} blog={blog} upload={update} />
              </div>
            </div>
            <Footer />
          </div>
        </>
      ) : null}
    </>
  );
};
