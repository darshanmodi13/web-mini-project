import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

//components
import Navbar from "./Navbar/Navbar";
import Blog from "./Blog/Blog";

const Home = () => {
  return (
    <div className="container">
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>
      <div className="blog-container">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
