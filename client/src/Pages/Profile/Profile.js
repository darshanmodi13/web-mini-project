import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import styles from './profile.module.css'
//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";

const Profile = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className={styles["profile-container"]}>
            <div className={styles.profile}>
                <div>Name = Daiict</div>
                <div>Email ID - Daiict.ac.in</div>
                <div>Mobile No. - 9999999999</div>
                <div>--------------------------------------------- Your Previous Blogs ------------------------------------------------</div>
                
            </div>
        </div>
        <div className="blog-container" style={{marginTop : '0%'}}>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/><Blog/>

                </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
