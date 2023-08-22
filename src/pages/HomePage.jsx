import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../modules/HomePage";
import { useSelector } from "react-redux";
import { PATHS } from "~/constants/paths";

const HomePage = () => {
  const user = useSelector((state) => state.user.userPersonalData);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(user) === "{}") {
      navigate(PATHS.LOGIN);
    }
  },[]);

  return <Home />;
};

export default HomePage;
