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
// import ViewProfile from "./Pages/ViewProfile/ViewProfile";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<FullBlogPage />} />
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />} />

=======
          <Route path="/create" element={<CreateBlog />} />
>>>>>>> 6c9b684f749b5a73c4c852084422fc742defbe65
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
