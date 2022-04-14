import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";

const NotLoggedInRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { authState } = useGlobalContext();
  useEffect(() => {
    if (authState.authenticated) {
      navigate(-1);
    }
  }, [authState.authenticated, navigate]);

  return !authState.authenticated && children;
};

export default NotLoggedInRoutes;
