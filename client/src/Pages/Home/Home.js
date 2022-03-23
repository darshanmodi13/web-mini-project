import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blog/Blog";

const Home = () => {
  const { authState } = useGlobalContext();
  console.log(authState);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
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
    </>
  );
};

export default Home;
