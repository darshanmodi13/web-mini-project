import React from "react";
//css
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Context
import { GlobalContextProvider } from "./contexts/GlobalContext";

//Pages
import Home from "./Pages/Home/Home";
import { CreateBlog } from "./Pages/CreateBlog/CreateBlog";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import FullBlogPage from "./Pages/FullBlogPage/FullBlogPage";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<FullBlogPage />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
