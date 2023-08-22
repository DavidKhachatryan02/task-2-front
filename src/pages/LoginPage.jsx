import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { PATHS } from "~/constants/paths";
import { Login } from "../modules/LoginPage";
import api from "../api";
import { setUserPersonalData } from "../store/slice";

import Cookies from "js-cookie";

const LoginPage = () => {
  const user = useSelector((state) => state.user.userPersonalData);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const init = async () => {
    try {
      const token = Cookies.get("accessToken");
      if (token) {
        const response = await api.auth.getUser();
        dispatch(setUserPersonalData(response.data));
        navigate(PATHS.HOME);
      }
    } catch (e) {
      if (e instanceof AxiosError)
        toast.error(e?.response?.data?.message || e.message);
    }
  };

  useEffect(() => {
    init();
    if (JSON.stringify(user) !== "{}") {
      navigate(PATHS.HOME);
    }
  }, []);
  return <Login />;
};

export default LoginPage;
