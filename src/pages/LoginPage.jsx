import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "~/constants/paths";
import { Login } from "../modules/LoginPage";

const LoginPage = () => {
  const user = useSelector((state) => state.user.userPersonalData);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(user) !== "{}") {
      navigate(PATHS.HOME);
    }
  }, []);
  return <Login />;
};

export default LoginPage;
