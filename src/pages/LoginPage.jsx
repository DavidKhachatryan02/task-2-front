import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATHS } from "~/constants/paths";
import { Login } from "../modules/LoginPage";

const LoginPage = () => {
  const login = useSelector((state) => state.user.login);

  return <Login />;
};

export default LoginPage;


//   const navigate = useNavigate();

//   useEffect(() => {
//     if (JSON.stringify(user) === "{}") {
//       navigate(PATHS.LOGIN);
//     }
//   }, [user, navigate]);

//   return <Home />;
// };

