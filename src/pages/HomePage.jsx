import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "~/constants/paths";
import { Home } from "../modules/HomePage";

const HomePage = () => {
  const user = useSelector((state) => state.user.userPersonalData);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(user) === "{}") {
      navigate(PATHS.LOGIN);
    }
  }, []);

  return <Home />;
};

export default HomePage;
