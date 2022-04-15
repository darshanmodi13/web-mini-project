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
import { UpdateBlog } from "./Pages/UpdateBlog/UpdateBlog";
// import ViewProfile from "./Pages/ViewProfile/ViewProfile";
import Profile from "./Pages/Profile/Profile";

//routes
import AuthRoutes from "./components/routes/AuthRoute";
import NotLoggedInRoutes from "./components/routes/NotLoggedInRoute";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <NotLoggedInRoutes>
                <Login />
              </NotLoggedInRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <NotLoggedInRoutes>
                <Register />
              </NotLoggedInRoutes>
            }
          />
          <Route path="/blog" element={<FullBlogPage />} />
          <Route
            path="/profile"
            element={
              <AuthRoutes>
                <Profile />
              </AuthRoutes>
            }
          />
          <Route
            path="/create"
            element={
              <AuthRoutes>
                <CreateBlog />
              </AuthRoutes>
            }
          />
          <Route
            path="/update"
            element={
              <AuthRoutes>
                <UpdateBlog />
              </AuthRoutes>
            }
          />
          <Route
            path="*"
            element={
              <>
                <h1>404 Not Found.</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
