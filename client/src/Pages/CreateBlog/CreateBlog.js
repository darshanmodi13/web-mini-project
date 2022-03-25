import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from "../../components/Navbar/Navbar";
import NewBlog from "../../components/NewBlog/NewBlog";
import Footer from "../../components/Footer/Footer";
export const CreateBlog = () => {
  const { authState } = useGlobalContext();
  console.log(authState);
  return (
    <div className="container">
      <div style={{ position: "relative" }}>
        <Navbar />
        <div style={{ marginTop: "2%" }}>
          <NewBlog />
        </div>
      </div>
      <Footer />
    </div>
  );
};
