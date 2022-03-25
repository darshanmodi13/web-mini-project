import React from 'react';
import { useGlobalContext } from "../../contexts/GlobalContext";

//components
import Navbar from '../../components/Navbar/Navbar';
import NewBlog from '../../components/NewBlog/NewBlog';

export const CreateBlog = () => {
    const { authState } = useGlobalContext();
    console.log(authState);
    return (
      <div className="container">
        <div style={{ position: "relative" }}>
          <Navbar />
          <div>
              <NewBlog/>
          </div>
        </div>
        </div>
        );
    };
