import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blog/Blog";
import NextPrevious from "../../components/NextPreviousComponent/NextPrevious";
import Footer from "../../components/Footer/Footer";

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
